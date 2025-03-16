// noinspection JSUnusedGlobalSymbols

export default defineNuxtRouteMiddleware((to, _from) => {
	if (to.path === '/') {
		return navigateTo('/works');
	}
});
