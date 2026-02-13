/**
 * Contact Module
 * Handles form validation, submission, and error handling
 */

const Contact = (() => {
    const form = document.getElementById('contact-form');
    
    // Form field references
    const fields = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        subject: document.getElementById('subject'),
        message: document.getElementById('message')
    };
    
    // Error display references
    const errors = {
        name: document.getElementById('name-error'),
        email: document.getElementById('email-error'),
        subject: document.getElementById('subject-error'),
        message: document.getElementById('message-error')
    };
    
    const formMessage = document.getElementById('form-message');
    const submitBtn = form ? form.querySelector('.btn-submit') : null;
    
    /**
     * Initialize contact form
     */
    const init = () => {
        if (!form) return;
        
        // Form submission
        form.addEventListener('submit', handleSubmit);
        
        // Real-time validation
        Object.keys(fields).forEach(field => {
            if (fields[field]) {
                fields[field].addEventListener('blur', () => validateField(field));
                fields[field].addEventListener('input', () => clearError(field));
            }
        });
    };
    
    /**
     * Validate all form fields
     */
    const validateForm = () => {
        let isValid = true;
        
        Object.keys(fields).forEach(field => {
            if (!validateField(field)) {
                isValid = false;
            }
        });
        
        return isValid;
    };
    
    /**
     * Validate individual field
     */
    const validateField = (fieldName) => {
        const field = fields[fieldName];
        const errorEl = errors[fieldName];
        
        if (!field || !errorEl) return true;
        
        const value = field.value.trim();
        let error = '';
        
        switch (fieldName) {
            case 'name':
                if (!value) {
                    error = 'Name is required';
                } else if (value.length < 2) {
                    error = 'Name must be at least 2 characters';
                } else if (value.length > 50) {
                    error = 'Name must be less than 50 characters';
                } else if (!/^[a-zA-Z\s'-]+$/.test(value)) {
                    error = 'Name can only contain letters, spaces, hyphens, and apostrophes';
                }
                break;
                
            case 'email':
                if (!value) {
                    error = 'Email is required';
                } else if (!isValidEmail(value)) {
                    error = 'Please enter a valid email address';
                }
                break;
                
            case 'subject':
                if (!value) {
                    error = 'Subject is required';
                } else if (value.length < 3) {
                    error = 'Subject must be at least 3 characters';
                } else if (value.length > 100) {
                    error = 'Subject must be less than 100 characters';
                }
                break;
                
            case 'message':
                if (!value) {
                    error = 'Message is required';
                } else if (value.length < 10) {
                    error = 'Message must be at least 10 characters';
                } else if (value.length > 2000) {
                    error = 'Message must be less than 2000 characters';
                }
                break;
        }
        
        if (error) {
            showError(fieldName, error);
            return false;
        } else {
            clearError(fieldName);
            return true;
        }
    };
    
    /**
     * Validate email format
     */
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    /**
     * Show field error
     */
    const showError = (fieldName, message) => {
        const field = fields[fieldName];
        const errorEl = errors[fieldName];
        
        if (field) {
            field.classList.add('error');
        }
        
        if (errorEl) {
            errorEl.textContent = message;
        }
    };
    
    /**
     * Clear field error
     */
    const clearError = (fieldName) => {
        const field = fields[fieldName];
        const errorEl = errors[fieldName];
        
        if (field) {
            field.classList.remove('error');
        }
        
        if (errorEl) {
            errorEl.textContent = '';
        }
    };
    
    /**
     * Handle form submission
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Clear previous message
        hideMessage();
        
        // Validate form
        if (!validateForm()) {
            showMessage('Please fix the errors above', 'error');
            return;
        }
        
        // Prepare form data
        const formData = {
            name: fields.name.value.trim(),
            email: fields.email.value.trim(),
            subject: fields.subject.value.trim(),
            message: fields.message.value.trim(),
            timestamp: new Date().toISOString()
        };
        
        // Show loading state
        setSubmitLoading(true);
        
        try {
            // TODO: Replace with actual API endpoint
            // Example: const response = await fetch('/api/contact', { ... })
            
            // Simulate API call for demo
            await simulateApiCall(formData);
            
            // Success message
            showMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!', 'success');
            
            // Reset form
            form.reset();
            clearAllErrors();
            
            // Log to console (for development)
            console.log('Form submitted:', formData);
            
        } catch (error) {
            console.error('Form submission error:', error);
            showMessage('An error occurred while sending your message. Please try again.', 'error');
        } finally {
            // Hide loading state
            setSubmitLoading(false);
        }
    };
    
    /**
     * Simulate API call (replace with real API)
     */
    const simulateApiCall = (data) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate success (90% chance)
                if (Math.random() > 0.1) {
                    // Store message locally (for demonstration)
                    const messages = JSON.parse(localStorage.getItem('contact-messages') || '[]');
                    messages.push(data);
                    localStorage.setItem('contact-messages', JSON.stringify(messages));
                    resolve({ success: true, message: 'Message sent successfully' });
                } else {
                    reject(new Error('Simulated API error'));
                }
            }, 1500);
        });
    };
    
    /**
     * Set submit button loading state
     */
    const setSubmitLoading = (isLoading) => {
        if (!submitBtn) return;
        
        if (isLoading) {
            submitBtn.classList.add('loading');
            submitBtn.disabled = true;
        } else {
            submitBtn.classList.remove('loading');
            submitBtn.disabled = false;
        }
    };
    
    /**
     * Show form message
     */
    const showMessage = (message, type = 'info') => {
        if (!formMessage) return;
        
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
    };
    
    /**
     * Hide form message
     */
    const hideMessage = () => {
        if (!formMessage) return;
        
        formMessage.textContent = '';
        formMessage.className = 'form-message';
    };
    
    /**
     * Clear all field errors
     */
    const clearAllErrors = () => {
        Object.keys(errors).forEach(field => {
            clearError(field);
        });
    };
    
    /**
     * Get form data
     */
    const getFormData = () => {
        return {
            name: fields.name.value.trim(),
            email: fields.email.value.trim(),
            subject: fields.subject.value.trim(),
            message: fields.message.value.trim()
        };
    };
    
    /**
     * Reset form
     */
    const resetForm = () => {
        form.reset();
        clearAllErrors();
        hideMessage();
    };
    
    return {
        init,
        validateForm,
        validateField,
        getFormData,
        resetForm,
        showMessage,
        hideMessage
    };
})();

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', Contact.init);
} else {
    Contact.init();
}
