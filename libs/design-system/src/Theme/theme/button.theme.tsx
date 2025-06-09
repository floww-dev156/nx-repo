import { Hierarchy, SubVariant } from '../../components/Button'

import { colors } from '../../style-guide/colors'

export const buttonTheme = {
   light: {
      [Hierarchy.Primary]: {
         [SubVariant.Primary]: {
            loaderColor: colors['base-white'],
            default: {
               textColor: 'text-base-white',
               bgColor: 'bg-primary-600',
               focusRingVariant: 'None',
               border: 'border border-solid border-primary-600 shadow-xs',
               iconColor: {
                  fill: colors['primary-600'],
                  stroke: colors['base-white']
               }
            },
            hover: {
               bgColor: 'bg-primary-700',
               textColor: 'text-base-white',
               focusRingVariant: 'None',
               border: 'border border-solid border-primary-700 shadow-xs',
               iconColor: {
                  fill: colors['primary-700'],
                  stroke: colors['base-white']
               }
            },
            focused: {
               bgColor: 'bg-primary-600',
               textColor: 'text-base-white',
               focusRingVariant: 'Primary',
               border: 'border border-solid border-primary-600 shadow-xs',
               iconColor: {
                  fill: colors['primary-600'],
                  stroke: colors['base-white']
               }
            },
            disabled: {
               focusRingVariant: 'None',
               bgColor: 'bg-primary-200',
               textColor: 'text-base-white',
               border: 'border border-solid border-primary-200 shadow-xs',
               iconColor: {
                  fill: colors['primary-200'],
                  stroke: colors['base-white']
               }
            }
         },
         [SubVariant.Destructive]: {
            loaderColor: colors['base-white'],
            default: {
               bgColor: 'bg-error-600',
               textColor: 'text-base-white',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-600 shadow-xs',
               iconColor: {
                  fill: colors['error-600'],
                  stroke: colors['base-white']
               }
            },
            hover: {
               bgColor: 'bg-error-700',
               textColor: 'text-base-white',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-700 shadow-xs',
               iconColor: {
                  fill: colors['error-700'],
                  stroke: colors['base-white']
               }
            },
            focused: {
               bgColor: 'bg-error-600',
               textColor: 'text-base-white',
               focusRingVariant: 'Destructive',
               border: 'border border-solid border-error-600 shadow-xs',
               iconColor: {
                  fill: colors['error-600'],
                  stroke: colors['base-white']
               }
            },
            disabled: {
               bgColor: 'bg-error-200',
               textColor: 'text-base-white',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-200 shadow-xs',
               iconColor: {
                  fill: colors['error-200'],
                  stroke: colors['base-white']
               }
            }
         }
      },
      [Hierarchy.Secondary]: {
         [SubVariant.GrayOutline]: {
            loaderColor: colors['gray-700'],
            default: {
               bgColor: 'bg-base-white',
               focusRingVariant: 'None',
               textColor: 'text-gray-700',
               border: 'border border-solid border-gray-300 shadow-xs',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['gray-700']
               }
            },
            hover: {
               bgColor: 'bg-gray-50',
               textColor: 'text-gray-800',
               focusRingVariant: 'None',
               border: 'border border-solid border-gray-300 shadow-xs',
               iconColor: {
                  fill: colors['gray-50'],
                  stroke: colors['gray-800']
               }
            },
            focused: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-700',
               focusRingVariant: 'Gray',
               border: 'border border-solid border-gray-300 shadow-xs',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['gray-700']
               }
            },
            disabled: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-300',
               focusRingVariant: 'None',
               border: 'border border-solid border-gray-200 shadow-xs',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['gray-300']
               }
            }
         },
         [SubVariant.DestructiveOutline]: {
            loaderColor: colors['error-700'],
            default: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-700',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-300 shadow-xs',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['error-700']
               }
            },
            hover: {
               bgColor: 'bg-error-50',
               textColor: 'text-error-800',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-300 shadow-xs',
               iconColor: {
                  fill: colors['error-50'],
                  stroke: colors['error-800']
               }
            },
            focused: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-700',
               focusRingVariant: 'Destructive',
               border: 'border border-solid border-error-300 shadow-xs',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['error-700']
               }
            },
            disabled: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-300',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-200 shadow-xs',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['error-300']
               }
            }
         },
         [SubVariant.Primary]: {
            loaderColor: colors['primary-600'],
            default: {
               bgColor: 'bg-primary-50',
               textColor: 'text-primary-600',
               focusRingVariant: 'None',
               border: 'border border-solid border-primary-50',
               iconColor: {
                  fill: colors['primary-50'],
                  stroke: colors['primary-600']
               }
            },
            hover: {
               bgColor: 'bg-primary-100',
               textColor: 'text-primary-700',
               focusRingVariant: 'None',
               border: 'border border-solid border-primary-100',
               iconColor: {
                  fill: colors['primary-100'],
                  stroke: colors['primary-700']
               }
            },
            focused: {
               bgColor: 'bg-primary-50',
               textColor: 'text-primary-600',
               focusRingVariant: 'Primary',
               border: 'border border-solid border-primary-50 shadow-xs',
               iconColor: {
                  fill: colors['primary-50'],
                  stroke: colors['primary-600']
               }
            },
            disabled: {
               bgColor: 'bg-primary-25',
               textColor: 'text-primary-300',
               focusRingVariant: 'None',
               border: 'border border-solid border-primary-25',
               iconColor: {
                  fill: colors['primary-25'],
                  stroke: colors['primary-300']
               }
            }
         },
         [SubVariant.Destructive]: {
            loaderColor: colors['error-700'],
            default: {
               bgColor: 'bg-error-50',
               textColor: 'text-error-700',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-50',
               iconColor: {
                  fill: colors['error-50'],
                  stroke: colors['error-700']
               }
            },
            hover: {
               bgColor: 'bg-error-100',
               textColor: 'text-error-800',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-100',
               iconColor: {
                  fill: colors['error-100'],
                  stroke: colors['error-800']
               }
            },
            focused: {
               bgColor: 'bg-error-50',
               textColor: 'text-error-700',
               focusRingVariant: 'Destructive',
               border: 'border border-solid border-error-50 shadow-xs',
               iconColor: {
                  fill: colors['error-50'],
                  stroke: colors['error-700']
               }
            },
            disabled: {
               bgColor: 'bg-error-25',
               textColor: 'text-error-300',
               focusRingVariant: 'None',
               border: 'border border-solid border-error-25',
               iconColor: {
                  fill: colors['error-25'],
                  stroke: colors['error-300']
               }
            }
         },
         [SubVariant.Success]: {
            loaderColor: colors['success-700'],
            default: {
               bgColor: 'bg-success-50',
               textColor: 'text-success-700',
               focusRingVariant: 'None',
               border: 'border border-solid border-success-50',
               iconColor: {
                  fill: colors['success-50'],
                  stroke: colors['success-700']
               }
            },
            hover: {
               bgColor: 'bg-success-100',
               textColor: 'text-success-800',
               focusRingVariant: 'None',
               border: 'border border-solid border-success-100',
               iconColor: {
                  fill: colors['success-100'],
                  stroke: colors['success-800']
               }
            },
            focused: {
               bgColor: 'bg-success-50',
               textColor: 'text-success-700',
               focusRingVariant: 'Success',
               border: 'border border-solid border-success-50 shadow-xs',
               iconColor: {
                  fill: colors['success-50'],
                  stroke: colors['success-700']
               }
            },
            disabled: {
               bgColor: 'bg-success-25',
               textColor: 'text-success-300',
               focusRingVariant: 'None',
               border: 'border border-solid border-success-25',
               iconColor: {
                  fill: colors['success-25'],
                  stroke: colors['success-300']
               }
            }
         },
         [SubVariant.Violet]: {
            loaderColor: colors['violet-700'],
            default: {
               bgColor: 'bg-violet-50',
               textColor: 'text-violet-700',
               focusRingVariant: 'None',
               border: 'border border-solid border-violet-50',
               iconColor: {
                  fill: colors['violet-50'],
                  stroke: colors['violet-700']
               }
            },
            hover: {
               bgColor: 'bg-violet-100',
               textColor: 'text-violet-800',
               focusRingVariant: 'None',
               border: 'border border-solid border-violet-100',
               iconColor: {
                  fill: colors['violet-100'],
                  stroke: colors['violet-800']
               }
            },
            focused: {
               bgColor: 'bg-violet-50',
               textColor: 'text-violet-700',
               focusRingVariant: 'Violet',
               border: 'border border-solid border-violet-50 shadow-xs',
               iconColor: {
                  fill: colors['violet-50'],
                  stroke: colors['violet-700']
               }
            },
            disabled: {
               bgColor: 'bg-violet-25',
               textColor: 'text-violet-300',
               focusRingVariant: 'None',
               border: 'border border-solid border-violet-25',
               iconColor: {
                  fill: colors['violet-25'],
                  stroke: colors['violet-300']
               }
            }
         }
      },
      [Hierarchy.Tertiary]: {
         [SubVariant.Gray]: {
            loaderColor: colors['gray-700'],
            default: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-600',
               border: 'border-none',
               focusRingVariant: 'None',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['gray-600']
               }
            },
            hover: {
               bgColor: 'bg-gray-50',
               textColor: 'text-gray-700',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['gray-50'],
                  stroke: colors['gray-700']
               }
            },
            focused: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-600',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['gray-50'],
                  stroke: colors['gray-600']
               }
            },
            disabled: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-300',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['gray-300']
               }
            }
         },
         [SubVariant.Primary]: {
            loaderColor: colors['primary-600'],
            default: {
               bgColor: 'bg-base-white',
               textColor: 'text-primary-600',
               border: 'border-none',
               focusRingVariant: 'None',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['primary-600']
               }
            },
            hover: {
               bgColor: 'bg-primary-50',
               textColor: 'text-primary-700',
               border: 'border-none',
               focusRingVariant: 'None',
               iconColor: {
                  fill: colors['primary-50'],
                  stroke: colors['primary-700']
               }
            },
            focused: {
               bgColor: 'bg-base-white',
               textColor: 'text-primary-600',
               border: 'border-none',
               focusRingVariant: 'None',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['primary-600']
               }
            },
            disabled: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-300',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['gray-300']
               }
            }
         },
         [SubVariant.Destructive]: {
            loaderColor: colors['error-700'],
            default: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-700',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['error-700']
               }
            },
            hover: {
               bgColor: 'bg-error-50',
               textColor: 'text-error-800',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['error-50'],
                  stroke: colors['error-800']
               }
            },
            focused: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-700',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['error-700']
               }
            },
            disabled: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-300',
               border: 'border-none',
               iconColor: {
                  fill: colors['base-white'],
                  stroke: colors['error-300']
               }
            }
         }
      },
      [Hierarchy.Link]: {
         [SubVariant.Gray]: {
            loaderColor: colors['gray-700'],
            default: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-600',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['gray-600'],
                  stroke: colors['gray-600']
               }
            },
            hover: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-700',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['gray-700'],
                  stroke: colors['gray-700']
               }
            },
            focused: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-600',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['gray-600'],
                  stroke: colors['gray-600']
               }
            },
            disabled: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-300',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['gray-300'],
                  stroke: colors['gray-300']
               }
            }
         },
         [SubVariant.Primary]: {
            loaderColor: colors['primary-600'],
            default: {
               bgColor: 'bg-base-white',
               textColor: 'text-primary-600',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['primary-600'],
                  stroke: colors['primary-600']
               }
            },
            hover: {
               bgColor: 'bg-base-white',
               textColor: 'text-primary-700',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['primary-700'],
                  stroke: colors['primary-700']
               }
            },
            focused: {
               bgColor: 'bg-base-white',
               textColor: 'text-primary-600',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['primary-600'],
                  stroke: colors['primary-600']
               }
            },
            disabled: {
               bgColor: 'bg-base-white',
               textColor: 'text-gray-300',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['gray-300'],
                  stroke: colors['gray-300']
               }
            }
         },
         [SubVariant.Destructive]: {
            loaderColor: colors['error-700'],
            default: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-700',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['error-700'],
                  stroke: colors['error-700']
               }
            },
            hover: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-800',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['error-800'],
                  stroke: colors['error-800']
               }
            },
            focused: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-700',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['error-700'],
                  stroke: colors['error-700']
               }
            },
            disabled: {
               bgColor: 'bg-base-white',
               textColor: 'text-error-300',
               focusRingVariant: 'None',
               border: 'border-none',
               iconColor: {
                  fill: colors['error-300'],
                  stroke: colors['error-300']
               }
            }
         }
      }
   },

   dark: {}
}
