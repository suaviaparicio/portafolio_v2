import React, { useEffect } from 'react';

const ClipboardComponent = () => {
    useEffect(() => {
        const copyButton = document.getElementById('copy-button');
        const contactDetails = document.getElementById('contact-details').textContent;
        const defaultIcon = document.getElementById('default-icon-contact-details');
        const successIcon = document.getElementById('success-icon-contact-details');

        const showSuccess = () => {
            defaultIcon.classList.add('hidden');
            successIcon.classList.remove('hidden');

            // reset to default state
            setTimeout(() => {
                defaultIcon.classList.remove('hidden');
                successIcon.classList.add('hidden');
            }, 3000);
        };

        copyButton.addEventListener('click', async () => {
            try {
                await navigator.clipboard.writeText(contactDetails);
                showSuccess();
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        });
    }, []);

    return null;
};

export default ClipboardComponent;
