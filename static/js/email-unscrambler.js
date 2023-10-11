class EmailUnscrambler {
    #unscrambleTriggers = [
        'mouseover',
        'touchstart',
        'focus'
    ];

    constructor(scrambledEmailLinkClassName = 'scrambled-email-link') {
        const scrambledEmailLinks = document.getElementsByClassName(scrambledEmailLinkClassName);

        for (const scrambledEmailLink of scrambledEmailLinks) {
            for (const trigger of this.#unscrambleTriggers) {
                scrambledEmailLink.addEventListener(trigger, () => {
                    this.#unscrambleEmailLink(scrambledEmailLink);
                });
            }
        }
    }

    #unscrambleEmailLink(scrambledEmailLink) {
        const addressFragments = this.#getAddressFragments(scrambledEmailLink);
        const addressFragmentsSequence = this.#getAddressFragmentsSequence(scrambledEmailLink);
        const arrangedFragments = this.#arrangeAddressFragments(addressFragments, addressFragmentsSequence);
        const emailLinkString = this.#joinEmailLinkFragments(arrangedFragments);

        this.#injectEmailLink(emailLinkString, scrambledEmailLink);
    }

    #getAddressFragments(scrambledEmailLink) {
        const addressDataPoints = scrambledEmailLink.children[1].dataset;

        const addressFragments = [];

        for (const addressDataPoint in addressDataPoints) {
            if (addressDataPoint !== 'sequence') {
                addressFragments.push(addressDataPoints[addressDataPoint]);
            }
        }

        return addressFragments
    }

    #getAddressFragmentsSequence(scrambledEmailLink) {
        const addressDataPoints = scrambledEmailLink.children[1].dataset;
        const addressFragmentsSequence = addressDataPoints['sequence'].split('');

        return addressFragmentsSequence;
    }

    #arrangeAddressFragments(addressFragments, fragmentsSequence) {
        const fragmentsArray = [];
        
        for (const addressFragmentID in addressFragments) {
            fragmentsArray.push(addressFragments[addressFragmentID]);
        }

        const arrangedFragments = [];

        for (const fragmentPosition of fragmentsSequence) {
            arrangedFragments.push(fragmentsArray[fragmentPosition]);
        }

        return arrangedFragments;
    }

    #joinEmailLinkFragments(arrangedFragments) {
        const joinedEmailLinkFragments = arrangedFragments.join('');

        return joinedEmailLinkFragments;
    }

    #injectEmailLink(emailLinkString, emailLinkElement) {
        emailLinkElement.href = emailLinkString;
    }
}

const emailUnscrambler = new EmailUnscrambler();