export const SEARCH_CONSTANTS = {
  ANIMATION_DURATION: 200,
  BLUR_DELAY: 200,
  HEADER_HEIGHT: 80,
  Z_INDICES: {
    BACKDROP: 30,
    MODAL: 40,
    DROPDOWN: 50,
  },
} as const;

export const SEARCH_CLASSES = {
  INPUT:
    'text-sm w-full border-none outline-none focus:outline-none focus:ring-0 text-black px-2 appearance-none [&::-webkit-search-cancel-button]:appearance-none',
  INPUT_WRAPPER: 'flex items-center bg-white w-[475px] p-1',
  DROPDOWN_BASE:
    'absolute top-12 left-0 w-screen max-w-3xl bg-white shadow-lg rounded-md',
  MODAL_BASE: 'fixed inset-x-0 top-[80px] bg-white shadow-lg w-full',
  CONTAINER: 'wrapper',
} as const;
