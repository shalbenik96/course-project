const hamburgerTextHidden = () => {
	const hamburgerBtn = document.querySelector('.hamburger'),
		headerTitle = document.querySelector('.header-title'),
		headerText = document.querySelector('.header-title-text__item'),
		headerLogo = document.querySelector('.header-logo__item'),
		headeLink = document.querySelector('.header-link'),
		body = document.querySelector('body')
	hamburgerBtn.addEventListener('click', () => {
		headerTitle.classList.toggle('active__text')
		headerText.classList.toggle('active__text')
		headerLogo.classList.toggle('active__text')
		headeLink.classList.toggle('active__text')
		body.classList.toggle('scroll__disable')
	})
}
hamburgerTextHidden()
