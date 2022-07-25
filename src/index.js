import {
  discordLoginButton,
  personalPage,
  userName,
  userID,
  userAvatar,
  userDiscriminator,
  userFlags
} from 'ui.js'

window.onload = () => {
  const fragment = new URLSearchParams(window.location.hash.slice(1));
	const [accessToken, tokenType] = [fragment.get('access_token'), fragment.get('token_type')];

	if (!accessToken) {
    // before login
    discordLoginButton.style.display = 'block'
    personalPage.style.display = 'none'
	} else {
    // after login
    // hide discord login button
    fetch('https://discord.com/api/users/@me', {
			headers: {
				authorization: `${tokenType} ${accessToken}`,
			},
		})
			.then(result => result.json())
			.then(response => {
        console.log(response)
        discordLoginButton.style.display = 'none'
        personalPage.style.display = 'block'

        userName.innerHTML = response.username
        userID.innerHTML = response.id
        userAvatar.innerHTML = response.avatar
        userDiscriminator.innerHTML = response.discriminator
        userFlags.innerHTML = response.flags
			})
			.catch(console.error);
  }
}