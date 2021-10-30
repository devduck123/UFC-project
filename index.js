document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#nav-toggle').onclick = () => {
        // console.log('toggled');
        let navWrapper = document.querySelector('nav');
        let nav = document.querySelector('#nav');

        if (nav.style.display === 'none') {
            nav.style.display = 'flex';
            document.querySelector('#nav-toggle').style.backgroundColor = 'rgb(33, 33, 33)';
            document.querySelector('#nav-toggle').style.color = '#d9204e';
            navWrapper.style.backgroundColor = '#d9204e';
        }
        else {
            nav.style.display = 'none';
            navWrapper.style.backgroundColor = 'transparent';
            document.querySelector('#nav-toggle').style.backgroundColor = '#d9204e';
            document.querySelector('#nav-toggle').style.color = 'rgb(33, 33, 33)';
        }
    }
});