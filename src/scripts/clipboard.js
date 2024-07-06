document.addEventListener('DOMContentLoaded', () => {
    const copyButton = document.getElementById('copy-button');
    const contactDetails = document.getElementById('contact-details').textContent;
    const defaultIcon = document.getElementById('default-icon-contact-details');
    const successIcon = document.getElementById('success-icon-contact-details');
    const defaultTooltipMessage = document.getElementById('default-tooltip-message-contact-details');
    const successTooltipMessage = document.getElementById('success-tooltip-message-contact-details');

    copyButton.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(contactDetails);
            showSuccess();
        } catch (err) {
            console.error('Failed to copy text: ', err);
        }
    });

    const showSuccess = () => {
        defaultIcon.classList.add('hidden');
        successIcon.classList.remove('hidden');
        defaultTooltipMessage.classList.add('hidden');
        successTooltipMessage.classList.remove('hidden');
        
        // reset to default state
        setTimeout(() => {
            defaultIcon.classList.remove('hidden');
            successIcon.classList.add('hidden');
            defaultTooltipMessage.classList.remove('hidden');
            successTooltipMessage.classList.add('hidden');
        }, 2000);
    };
});
