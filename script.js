// Smooth scrolling functionality
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Navigation scroll effect
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(15, 15, 35, 0.95)';
    } else {
        navbar.style.background = 'rgba(15, 15, 35, 0.8)';
    }
});

// Contact form handling
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(this);
    const name = formData.get('name');
    const email = formData.get('email');
    const company = formData.get('company');
    
    // Validate required fields
    if (!name || !email) {
        showError('Please fill in all required fields.');
        return;
    }
    
    // Validate email format
    if (!isValidEmail(email)) {
        showError('Please enter a valid email address.');
        return;
    }
    
    // Simulate form submission
    showLoadingState();
    
    setTimeout(function() {
        hideLoadingState();
        showSuccessModal();
        resetForm();
    }, 1500);
});

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show loading state
function showLoadingState() {
    const submitButton = document.querySelector('.submit-button');
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;
    submitButton.style.opacity = '0.7';
}

// Hide loading state
function hideLoadingState() {
    const submitButton = document.querySelector('.submit-button');
    submitButton.textContent = 'Submit';
    submitButton.disabled = false;
    submitButton.style.opacity = '1';
}

// Show error message
function showError(message) {
    // Remove existing error message
    const existingError = document.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    
    // Create error message
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.style.cssText = `
        background: linear-gradient(135deg, #ef4444, #dc2626);
        color: white;
        padding: 12px 20px;
        border-radius: 8px;
        margin-bottom: 20px;
        font-size: 14px;
        text-align: center;
        animation: slideDown 0.3s ease;
    `;
    errorDiv.textContent = message;
    
    const form = document.querySelector('.contact-form');
    form.insertBefore(errorDiv, form.firstChild);
    
    // Remove error after 5 seconds
    setTimeout(() => {
        if (errorDiv) {
            errorDiv.remove();
        }
    }, 5000);
}

// Show success modal
function showSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'block';
    
    // Add animation
    const modalContent = modal.querySelector('.modal-content');
    modalContent.style.animation = 'modalSlideIn 0.4s ease';
}

// Hide success modal
function hideSuccessModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
}

// Reset form
function resetForm() {
    document.getElementById('contactForm').reset();
}

// Send another form
function sendAnother() {
    hideSuccessModal();
    scrollToSection('contact');
}

// Modal event listeners
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('successModal');
    const closeBtn = modal.querySelector('.close');
    
    // Close modal when clicking X
    closeBtn.addEventListener('click', hideSuccessModal);
    
    // Close modal when clicking outside
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            hideSuccessModal();
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll('.stat-item, .collaboration-card, .figma-file-card, .userflow-card');
    
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// Counter animation for statistics
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = counter.textContent;
        const isPercentage = target.includes('%');
        const isDecimal = target.includes('.');
        const isNumberWithComma = target.includes(',');
        const hasPlus = target.includes('+');
        
        let finalNumber;
        if (isPercentage) {
            finalNumber = parseInt(target);
        } else if (isDecimal) {
            finalNumber = parseFloat(target);
        } else if (isNumberWithComma) {
            finalNumber = parseInt(target.replace(',', ''));
        } else if (hasPlus) {
            finalNumber = parseInt(target.replace('+', ''));
        } else {
            finalNumber = parseInt(target);
        }
        
        let currentNumber = 0;
        const increment = finalNumber / 100;
        const duration = 2000;
        const stepTime = duration / 100;
        
        const timer = setInterval(() => {
            currentNumber += increment;
            
            if (currentNumber >= finalNumber) {
                currentNumber = finalNumber;
                clearInterval(timer);
            }
            
            let displayNumber;
            if (isDecimal) {
                displayNumber = currentNumber.toFixed(1);
            } else if (isNumberWithComma && currentNumber >= 1000) {
                displayNumber = Math.floor(currentNumber).toLocaleString();
            } else {
                displayNumber = Math.floor(currentNumber);
            }
            
            if (isPercentage) {
                counter.textContent = displayNumber + '%';
            } else if (hasPlus) {
                counter.textContent = displayNumber + '+';
            } else {
                counter.textContent = displayNumber;
            }
        }, stepTime);
    });
}

// Trigger counter animation when statistics section is visible
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.addEventListener('DOMContentLoaded', function() {
    const statsSection = document.querySelector('.statistics');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const videoContainer = document.querySelector('.hero-video-container');
    
    if (videoContainer) {
        // Enhanced parallax effect for the video
        const speed = scrolled * 0.3;
        const rotation = scrolled * 0.02;
        videoContainer.style.transform = `translateX(-50%) translateY(${speed}px) rotateY(${rotation}deg)`;
    }
});

// Button click effects
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button, .portfolio-btn, .telegram-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.3);
                border-radius: 50%;
                transform: scale(0);
                animation: ripple 0.6s linear;
                pointer-events: none;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    @keyframes modalSlideIn {
        from {
            opacity: 0;
            transform: scale(0.8) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: scale(1) translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation links
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Add loading animation
window.addEventListener('load', function() {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Handle mobile menu (for responsive design)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Easter egg: Konami code
let konamiCode = [];
const konami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', function(e) {
    konamiCode.push(e.keyCode);
    
    if (konamiCode.length > konami.length) {
        konamiCode.shift();
    }
    
    if (konamiCode.toString() === konami.toString()) {
        // Easter egg: Change the gradient colors
        document.body.style.background = 'linear-gradient(135deg, #ff006e 0%, #8338ec 50%, #3a86ff 100%)';
        
        // Show a fun message
        alert('🎉 You found the secret! Enjoy the new colors!');
        
        // Reset after 10 seconds
        setTimeout(() => {
            document.body.style.background = 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)';
        }, 10000);
        
        konamiCode = [];
    }
});

console.log('🚀 ByteTown website clone loaded successfully!');
console.log('💡 Tip: Try the Konami code for a surprise!');

// Video control functionality
function toggleVideo() {
    const video = document.querySelector('.hero-video');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    
    if (video.paused) {
        video.play();
        playPauseBtn.classList.add('playing');
    } else {
        video.pause();
        playPauseBtn.classList.remove('playing');
    }
}

// Video event listeners
document.addEventListener('DOMContentLoaded', function() {
    const video = document.querySelector('.hero-video');
    const playPauseBtn = document.querySelector('.play-pause-btn');
    
    if (video && playPauseBtn) {
        // Update button state when video plays/pauses
        video.addEventListener('play', function() {
            playPauseBtn.classList.add('playing');
        });
        
        video.addEventListener('pause', function() {
            playPauseBtn.classList.remove('playing');
        });
        
        // Handle video loading
        video.addEventListener('loadeddata', function() {
            console.log('🎥 Video loaded successfully');
        });
        
        // Handle video errors
        video.addEventListener('error', function() {
            console.error('❌ Error loading video');
            const container = video.closest('.hero-video-container');
            if (container) {
                container.style.display = 'none';
            }
        });
        
        // Click video to toggle play/pause
        video.addEventListener('click', toggleVideo);
        
        // Intersection Observer for video autoplay
        const videoObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Auto-play when video comes into view
                    if (video.paused) {
                        video.play().catch(e => {
                            console.log('Auto-play prevented by browser');
                        });
                    }
                } else {
                    // Pause when video goes out of view
                    if (!video.paused) {
                        video.pause();
                    }
                }
            });
        }, { threshold: 0.5 });
        
        videoObserver.observe(video);
    }
}); 