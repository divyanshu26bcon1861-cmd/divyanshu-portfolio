/**
 * Contact Form, Feedback & Social Integration Module - Divyanshu Jain
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initCopyEmailButtons();
  initGitHubStats();
});

/**
 * Toast Notification System
 */
function showToast(message, type = 'info') {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';

  let iconName = 'info';
  let iconColor = 'text-cyan-400';
  if (type === 'success') {
    iconName = 'check-circle';
    iconColor = 'text-emerald-400';
  } else if (type === 'error') {
    iconName = 'alert-triangle';
    iconColor = 'text-rose-400';
  }

  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 ${iconColor} shrink-0"></i>
    <span class="text-sm font-medium">${message}</span>
  `;

  container.appendChild(toast);

  if (window.lucide) {
    window.lucide.createIcons();
  }

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(12px) scale(0.96)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

/**
 * Initialize Contact Form with Genuine Fallback Behavior
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const subjectInput = document.getElementById('contact-subject');
  const messageInput = document.getElementById('contact-message');
  const submitBtn = document.getElementById('contact-submit-btn');
  const formStatus = document.getElementById('form-status-alert');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Reset errors
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const subject = subjectInput.value.trim();
    const message = messageInput.value.trim();

    let hasErrors = false;

    // Validation
    if (name.length < 2) {
      showFieldError('name', 'Please enter your name (at least 2 characters).');
      hasErrors = true;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showFieldError('email', 'Please provide a valid email address.');
      hasErrors = true;
    }

    if (subject.length < 3) {
      showFieldError('subject', 'Please specify a subject for your message.');
      hasErrors = true;
    }

    if (message.length < 10) {
      showFieldError('message', 'Please write a message with at least 10 characters.');
      hasErrors = true;
    }

    if (hasErrors) {
      return;
    }

    // Check if real Web3Forms / Formspree API key exists in config
    const contactConfig = window.PORTFOLIO_DATA?.contact || {};
    const apiKey = contactConfig.web3formsAccessKey?.trim();
    const targetEmail = contactConfig.email || 'divyanshujaindj777@gmail.com';

    // Set Loading State
    setLoadingState(true);

    if (apiKey) {
      // Real API Submission via Web3Forms
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            access_key: apiKey,
            name: name,
            email: email,
            subject: subject,
            message: message,
            from_name: 'Portfolio Contact Form'
          })
        });

        const data = await response.json();

        if (response.status === 200 && data.success) {
          form.reset();
          showStatusAlert(
            'success',
            'Thank you! Your message was delivered successfully. I will get back to you shortly.'
          );
          showToast('Message sent successfully!', 'success');
        } else {
          throw new Error(data.message || 'Submission service returned an error.');
        }
      } catch (err) {
        console.warn('API submission failed, activating email client fallback:', err);
        fallbackToMailto(targetEmail, name, email, subject, message);
      } finally {
        setLoadingState(false);
      }
    } else {
      // Honest, authentic fallback: prepare directly in mail client
      // Gives full transparency: no fake success banner, actually prepares email to Divyanshu!
      setTimeout(() => {
        fallbackToMailto(targetEmail, name, email, subject, message);
        setLoadingState(false);
      }, 400);
    }
  });

  function fallbackToMailto(toEmail, name, fromEmail, subject, bodyText) {
    const emailSubject = encodeURIComponent(`[Portfolio Inquiry] ${subject}`);
    const emailBody = encodeURIComponent(
      `Hello Divyanshu,\n\nName: ${name}\nEmail: ${fromEmail}\n\nMessage:\n${bodyText}\n\n---\nSent via Portfolio Contact Form`
    );
    const mailtoUrl = `mailto:${toEmail}?subject=${emailSubject}&body=${emailBody}`;

    // Open default mail client
    window.location.href = mailtoUrl;

    showStatusAlert(
      'info',
      `Your email application has been opened with your pre-filled message to <strong>${toEmail}</strong>. If your email client didn't open automatically, you can also send directly to <a href="${mailtoUrl}" class="underline text-violet-300 font-semibold">${toEmail}</a>.`
    );
    showToast('Email client opened with your message!', 'info');
  }

  function setLoadingState(isLoading) {
    if (!submitBtn) return;
    if (isLoading) {
      submitBtn.disabled = true;
      submitBtn.classList.add('opacity-75', 'cursor-not-allowed');
      submitBtn.innerHTML = `
        <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white inline-block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <span>Preparing message...</span>
      `;
    } else {
      submitBtn.disabled = false;
      submitBtn.classList.remove('opacity-75', 'cursor-not-allowed');
      submitBtn.innerHTML = `
        <span>Send Message</span>
        <i data-lucide="send" class="w-4 h-4"></i>
      `;
      if (window.lucide) window.lucide.createIcons();
    }
  }

  function showFieldError(field, errorMsg) {
    const errElem = document.getElementById(`error-${field}`);
    const inputElem = document.getElementById(`contact-${field}`);
    if (errElem) {
      errElem.textContent = errorMsg;
      errElem.classList.remove('hidden');
    }
    if (inputElem) {
      inputElem.classList.add('border-rose-500/70', 'focus:border-rose-400');
    }
  }

  function clearErrors() {
    ['name', 'email', 'subject', 'message'].forEach(f => {
      const errElem = document.getElementById(`error-${f}`);
      const inputElem = document.getElementById(`contact-${f}`);
      if (errElem) {
        errElem.textContent = '';
        errElem.classList.add('hidden');
      }
      if (inputElem) {
        inputElem.classList.remove('border-rose-500/70', 'focus:border-rose-400');
      }
    });
    if (formStatus) {
      formStatus.classList.add('hidden');
      formStatus.innerHTML = '';
    }
  }

  function showStatusAlert(type, htmlContent) {
    if (!formStatus) return;
    formStatus.classList.remove('hidden');

    if (type === 'success') {
      formStatus.className = 'p-4 rounded-xl text-sm bg-emerald-500/10 border border-emerald-500/30 text-emerald-300';
    } else if (type === 'error') {
      formStatus.className = 'p-4 rounded-xl text-sm bg-rose-500/10 border border-rose-500/30 text-rose-300';
    } else {
      formStatus.className = 'p-4 rounded-xl text-sm bg-violet-500/10 border border-violet-500/30 text-violet-200';
    }

    formStatus.innerHTML = htmlContent;
  }
}

/**
 * Copy Email to Clipboard helper
 */
function initCopyEmailButtons() {
  document.querySelectorAll('.copy-email-trigger').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = window.PORTFOLIO_DATA?.personalInfo?.email || 'divyanshujaindj777@gmail.com';
      
      navigator.clipboard.writeText(email).then(() => {
        showToast(`Copied ${email} to clipboard!`, 'success');
      }).catch(() => {
        showToast('Unable to copy automatically. Email: ' + email, 'info');
      });
    });
  });
}

/**
 * Graceful GitHub Stats Integration
 */
async function initGitHubStats() {
  const container = document.getElementById('github-stat-badge');
  if (!container || !window.PORTFOLIO_DATA) return;

  const username = window.PORTFOLIO_DATA.personalInfo.githubUsername;
  if (!username) return;

  try {
    const res = await fetch(`https://api.github.com/users/${username}`, {
      headers: { 'Accept': 'application/vnd.github.v3+json' }
    });

    if (res.ok) {
      const data = await res.json();
      container.innerHTML = `
        <div class="flex items-center gap-4 text-xs font-mono text-slate-300">
          <span class="flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-400"></span>
            <span>${data.public_repos || 0} Repositories</span>
          </span>
          <span class="text-slate-600">·</span>
          <span>Joined ${new Date(data.created_at).getFullYear()}</span>
        </div>
      `;
    }
  } catch (e) {
    // Graceful offline fallback: keep standard profile text without throwing error
    console.log('GitHub public stats fetch skipped or rate-limited.');
  }
}
