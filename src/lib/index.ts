// Navigation
export { default as NavigationBar } from "./Components/Navigation/NavigationBar.svelte"
export { default as AppRail } from "./Components/Navigation/AppRail.svelte"

// Main
export { default as AnimeModal } from "./Components/Main/AnimeModal.svelte"




// Providers
export { gogo, animlist } from "./providers"

// Stores
export { searchStore, showSearchModalStore, themeStore, EpisodeLightStore } from "./stores"





// Widgets
export { default as GithubIcon } from "./Widgets/GithubIcon.svelte"
export { default as RecentAnimeCard } from "./Widgets/RecentAnimeCard.svelte"
export { default as Carousel } from "./Widgets/Carousel.svelte"
export { default as LatestEpisodesSideBar } from "./Widgets/LatestEpisodesSideBar.svelte"


export { default as RealtimeSearch } from "./Widgets/Search/RealtimeSearch.svelte"
export { default as SearchAnimeCard } from "./Widgets/Search/SearchAnimeCard.svelte"
export { default as SearchTrigger } from "./Widgets/Search/SearchTrigger.svelte"
export { default as WaitingAnimation } from "./Widgets/Search/WaitingAnimation.svelte"
export { default as RailSearchTrigger } from "./Widgets/Search/RailSearchTrigger.svelte"


export { default as ThemeTrigger } from "./Widgets/Themes/ThemeTrigger.svelte"


export { default as FilteringForm } from "./Widgets/explore/FilteringForm.svelte"


export { default as EpisodeIframe } from "./Widgets/episode/EpisodeIframe.svelte"
export { default as EpisodeNumbers } from "./Widgets/episode/EpisodeNumbers.svelte"
export { default as EpisodeLoader } from "./Widgets/episode/EpisodeLoader.svelte"
export { default as EpisodeLightSwitch } from "./Widgets/episode/EpisodeLightSwitch.svelte"
export { default as EpisodeOptions } from "./Widgets/episode/EpisodeOptions.svelte"
export { default as EpisodeChangingLoader } from "./Widgets/episode/EpisodeChangingLoader.svelte"



export {default as RailEffect } from "./Widgets/navigtation/RailEffect.svelte" 
export {default as RailButton } from "./Widgets/navigtation/RailButton.svelte" 

// Pages
export { default as RecentAnimePage } from "./Components/Pages/RecentAnimePage.svelte"




// Utils
export { changeTheme } from "./utils"