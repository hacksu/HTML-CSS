// Contact form validation and handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    const submitBtn = document.querySelector('.submit-btn');

    // Form validation
    function validateForm() {
        let isValid = true;
        
        // Reset previous error states
        clearErrors();
        
        // Name validation
        if (nameInput.value.trim().length < 2) {
            showError(nameInput, 'Name must be at least 2 characters long');
            isValid = false;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            showError(emailInput, 'Please enter a valid email address');
            isValid = false;
        }
        
        // Message validation
        if (messageInput.value.trim().length < 10) {
            showError(messageInput, 'Message must be at least 10 characters long');
            isValid = false;
        }
        
        return isValid;
    }
    
    // Show error message
    function showError(input, message) {
        const formGroup = input.closest('.form-group');
        const error = document.createElement('div');
        error.className = 'error-message';
        error.textContent = message;
        error.style.color = '#e74c3c';
        error.style.fontSize = '0.8rem';
        error.style.marginTop = '0.5rem';
        formGroup.appendChild(error);
        input.style.borderColor = '#e74c3c';
    }
    
    // Clear all error messages
    function clearErrors() {
        const errors = document.querySelectorAll('.error-message');
        errors.forEach(error => error.remove());
        
        const inputs = [nameInput, emailInput, messageInput];
        inputs.forEach(input => {
            input.style.borderColor = '#ddd';
        });
    }
    
    // Real-time validation
    nameInput.addEventListener('input', function() {
        if (this.value.trim().length >= 2) {
            this.style.borderColor = '#27ae60';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
    
    emailInput.addEventListener('input', function() {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailRegex.test(this.value.trim())) {
            this.style.borderColor = '#27ae60';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
    
    messageInput.addEventListener('input', function() {
        if (this.value.trim().length >= 10) {
            this.style.borderColor = '#27ae60';
        } else {
            this.style.borderColor = '#ddd';
        }
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (validateForm()) {
            // Show loading state
            submitBtn.innerHTML = '<span style="display: inline-block; width: 20px; height: 20px; border: 2px solid #fff; border-radius: 50%; border-top-color: transparent; animation: spin 1s linear infinite; margin-right: 10px;"></span>Sending...';
            submitBtn.disabled = true;
            
            // Add spin animation if it doesn't exist
            if (!document.querySelector('#spin-animation')) {
                const style = document.createElement('style');
                style.id = 'spin-animation';
                style.textContent = `
                    @keyframes spin {
                        to { transform: rotate(360deg); }
                    }
                `;
                document.head.appendChild(style);
            }
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                showSuccessMessage();
                form.reset();
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
            }, 2000);
        }
    });
    
    // Show success message
    function showSuccessMessage() {
        const successDiv = document.createElement('div');
        successDiv.className = 'success-message';
        successDiv.innerHTML = `
            <div style="
                background: linear-gradient(135deg, #27ae60, #2ecc71);
                color: white;
                padding: 1rem;
                border-radius: 10px;
                text-align: center;
                margin: 1rem 0;
                animation: slideDown 0.5s ease;
            ">
                <h4 style="margin: 0 0 0.5rem 0;">✓ Message Sent Successfully!</h4>
                <p style="margin: 0; opacity: 0.9;">Thank you for reaching out. I'll get back to you soon!</p>
            </div>
        `;
        
        // Add slide animation
        if (!document.querySelector('#slide-animation')) {
            const style = document.createElement('style');
            style.id = 'slide-animation';
            style.textContent = `
                @keyframes slideDown {
                    from {
                        transform: translateY(-20px);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
            `;
            document.head.appendChild(style);
        }
        
        form.parentNode.insertBefore(successDiv, form);
        
        // Remove success message after 5 seconds
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
    
    // FAQ toggle functionality
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('h4');
        const answer = item.querySelector('p');
        
        // Initially hide all answers
        answer.style.display = 'none';
        answer.style.maxHeight = '0';
        answer.style.overflow = 'hidden';
        answer.style.transition = 'max-height 0.3s ease, padding 0.3s ease';
        
        // Add click event to question
        question.addEventListener('click', function() {
            const isOpen = answer.style.maxHeight !== '0px' && answer.style.maxHeight !== '';
            
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('p');
                    const otherQuestion = otherItem.querySelector('h4');
                    otherAnswer.style.maxHeight = '0';
                    otherAnswer.style.padding = '0 0';
                    otherQuestion.style.color = '#2c3e50';
                }
            });
            
            // Toggle current item
            if (isOpen) {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 0';
                question.style.color = '#2c3e50';
            } else {
                answer.style.display = 'block';
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '1rem 0';
                question.style.color = '#3498db';
            }
        });
        
        // Add hover effect to questions
        question.style.cursor = 'pointer';
        question.style.transition = 'color 0.3s ease';
        
        question.addEventListener('mouseenter', function() {
            if (answer.style.maxHeight === '0px' || answer.style.maxHeight === '') {
                this.style.color = '#3498db';
            }
        });
        
        question.addEventListener('mouseleave', function() {
            if (answer.style.maxHeight === '0px' || answer.style.maxHeight === '') {
                this.style.color = '#2c3e50';
            }
        });
    });
    
    // Character counter for message textarea
    const maxLength = 500;
    messageInput.setAttribute('maxlength', maxLength);
    
    const counter = document.createElement('div');
    counter.className = 'character-counter';
    counter.style.textAlign = 'right';
    counter.style.fontSize = '0.8rem';
    counter.style.color = '#7f8c8d';
    counter.style.marginTop = '0.5rem';
    messageInput.parentNode.appendChild(counter);
    
    function updateCounter() {
        const remaining = maxLength - messageInput.value.length;
        counter.textContent = `${remaining} characters remaining`;
        
        if (remaining < 50) {
            counter.style.color = '#e74c3c';
        } else if (remaining < 100) {
            counter.style.color = '#f39c12';
        } else {
            counter.style.color = '#7f8c8d';
        }
    }
    
    messageInput.addEventListener('input', updateCounter);
    updateCounter(); // Initialize counter
    
    // Auto-resize textarea
    messageInput.addEventListener('input', function() {
        this.style.height = 'auto';
        this.style.height = this.scrollHeight + 'px';
    });
});

// Copy email to clipboard functionality
function copyEmail() {
    const email = 'your.email@example.com';
    
    if (navigator.clipboard && window.isSecureContext) {
        // Use modern clipboard API
        navigator.clipboard.writeText(email).then(() => {
            showCopySuccess();
        });
    } else {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        showCopySuccess();
    }
}

function showCopySuccess() {
    const notification = document.createElement('div');
    notification.textContent = 'Email copied to clipboard!';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 5px;
        z-index: 1000;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add slide animation
    if (!document.querySelector('#slideInRight-animation')) {
        const style = document.createElement('style');
        style.id = 'slideInRight-animation';
        style.textContent = `
            @keyframes slideInRight {
                from {
                    transform: translateX(100%);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}
