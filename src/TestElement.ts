class TestElement extends HTMLElement {

    onload = () => {
        console.log('loaded!');
        if (this.title === undefined) {
            this.title = 'override title!!';
        }
    };

    onmouseover = () => { console.log('Entered!!!', this.title);  };
}

customElements.define('test-element', TestElement);