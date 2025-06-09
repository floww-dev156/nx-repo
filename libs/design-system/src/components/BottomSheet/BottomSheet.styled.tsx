export const overlayStyles = `
    absolute inset-0 z-l1
    !animate-none transition-all !duration-0
`

export const contentStyles = `
    absolute bottom-0
    flex flex-col
    rounded-t-3xl
    max-h-[86%] w-full
    !animate-none transition-all !duration-0
    disable-bottom-sheet-outline
`

// #region - Base
export const baseModalChildStyles = `
    flex flex-col items-center
    bg-[#FFFFFF]
    border-t-4 border-[#D9D9D9]
    pt-[24px] pb-[32px] px-[16px] min-h-0 w-full h-full rounded-t-3xl
    overflow-y-auto
`
// #endregion

// #region - Game
export const gameThemeVariantCloseIconStyles = `
    self-end
    mb-[8px] mr-[16px]
`

export const gameModeChildContainerStyles = `
    relative
    flex flex-col
    w-full h-full min-h-0
`

export const gameModalChildStyles = `
    flex-1 flex flex-col
    pt-[64px] pb-[20px] px-[40px] min-h-0
    overflow-y-auto
`
// #endregion

export const childrenContainerStyles = `
    flex flex-col grow overflow-hidden w-full
`
export const bottomSheetContentStyles = `
    flex flex-col justify-end max-h-full
`

export const bottomSheetDraggableContainerStyles = `flex flex-col justify-end items-start`
