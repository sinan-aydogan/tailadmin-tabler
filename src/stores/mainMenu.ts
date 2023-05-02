import { defineStore } from 'pinia'
import { ref } from 'vue'
import {
  IconBox,
  IconCheckbox,
  IconFile,
  IconGhost,
  IconHeart,
  IconHome,
  IconLayout2,
  IconLifebuoy,
  IconStar
} from '@tabler/icons-vue'

export const useMainMenuStore = defineStore('main_menu', () => {
  const links = ref([
    {
      id: 'home',
      label: 'Home',
      to: { name: 'home' },
      icon: IconHome
    },
    {
      id: 'interface',
      label: 'Interface',
      type: 'dropdown',
      icon: IconBox,
      children: [
        [
          {
            id: 'empty-page',
            label: 'Empty Page',
            to: { name: 'empty-page' }
          },
          {
            id: 'accordion',
            label: 'Accordion',
            to: { name: 'accordion' }
          },
          {
            id: 'blank-page',
            label: 'Blank Page',
            to: { name: 'blank-page' }
          },
          {
            id: 'badges',
            label: 'Badges',
            to: { name: 'badges' },
            badge: {
              label: 'NEW',
              color: 'sky',
              style: 'outline'
            }
          },
          {
            id: 'buttons',
            label: 'Buttons',
            to: { name: 'buttons' }
          },
          {
            id: 'cards',
            label: 'Cards',
            type: 'dropdown',
            badge: {
              label: '3',
              color: 'pink',
              radius: 'full'
            },
            children: [
              {
                id: 'sample-cards',
                label: 'Sample Cards',
                to: { name: 'sample-cards' }
              },
              {
                id: 'card-actions',
                label: 'Card Actions',
                to: { name: 'card-actions' },
                badge: {
                  label: 'NEW',
                  color: 'green'
                }
              },
              {
                id: 'card-masonry',
                label: 'Card Masonry',
                to: { name: 'card-masonry' }
              }
            ]
          },
          {
            id: 'colors',
            label: 'Colors',
            to: { name: 'colors' }
          },
          {
            id: 'data-grid',
            label: 'Data grid',
            to: { name: 'data-grid' },
            badge: {
              label: 'NEW',
              color: 'red',
              style: 'soft'
            }
          },
          {
            id: 'data-tables',
            label: 'Data Tables',
            to: { name: 'data-tables' }
          },
          {
            id: 'dropdowns',
            label: 'Dropdowns',
            to: { name: 'dropdowns' }
          },
          {
            id: 'modals',
            label: 'Modals',
            to: { name: 'modals' }
          },
          {
            id: 'maps',
            label: 'Maps',
            to: { name: 'maps' }
          },
          {
            id: 'map-full-size',
            label: 'Map fullsize',
            to: { name: 'map-full-size' }
          },
          {
            id: 'vector-maps',
            label: 'Vector Maps',
            to: { name: 'vector-maps' },
            badge: {
              label: 'NEW',
              color: 'green'
            }
          },
          {
            id: 'navigation',
            label: 'Navigation',
            to: { name: 'navigation' }
          },
          {
            id: 'charts',
            label: 'Charts',
            to: { name: 'charts' }
          }
        ],
        [
          {
            id: 'pagination',
            label: 'Pagination',
            to: { name: 'pagination' }
          },
          {
            id: 'placeholder',
            label: 'Placeholder',
            to: { name: 'placeholder' }
          },
          {
            id: 'steps',
            label: 'Steps',
            to: { name: 'steps' }
          },
          {
            id: 'tabs',
            label: 'Tabs',
            to: { name: 'tabs' }
          },
          {
            id: 'tables',
            label: 'Tables',
            to: { name: 'tables' }
          },
          {
            id: 'carousel',
            label: 'Carousel',
            to: { name: 'carousel' }
          },
          {
            id: 'lists',
            label: 'Lists',
            to: { name: 'lists' }
          },
          {
            id: 'typography',
            label: 'Typography',
            to: { name: 'typography' }
          },
          {
            id: 'off-canvas',
            label: 'Off Canvas',
            to: { name: 'off-canvas' }
          },
          {
            id: 'markdown',
            label: 'Markdown',
            to: { name: 'markdown' }
          },
          {
            id: 'dropzone',
            label: 'Dropzone',
            to: { name: 'dropzone' }
          },
          {
            id: 'light-box',
            label: 'Light Box',
            to: { name: 'light-box' }
          },
          {
            id: 'tiny-mce',
            label: 'Tiny MCE',
            to: { name: 'tiny-mce' }
          },
          {
            id: 'inline-player',
            label: 'Inline Player',
            to: { name: 'inline-player' }
          },
          {
            id: 'authentication',
            label: 'Authentication',
            type: 'dropdown',
            children: [
              {
                id: 'sign-in',
                label: 'Sign In',
                to: { name: 'sign-in' }
              },
              {
                id: 'sign-in-link',
                label: 'Sign In Link',
                to: { name: 'sign-in-link' }
              },
              {
                id: 'sign-in-with-illustration',
                label: 'Sign In With Illustration',
                to: { name: 'sign-in-with-illustration' }
              },
              {
                id: 'sign-in-with-cover',
                label: 'Sign in with cover',
                to: { name: 'sign-in-with-cover' }
              },
              {
                id: 'sign-up',
                label: 'Sign Up',
                to: { name: 'sign-up' }
              },
              {
                id: 'forgot-password',
                label: 'Forgot Password',
                to: { name: 'forgot-password' }
              },
              {
                id: 'terms-of-service',
                label: 'Terms of Service',
                to: { name: 'terms-of-service' }
              },
              {
                id: 'lock-screen',
                label: 'Lock Screen',
                to: { name: 'lock-screen' }
              }
            ]
          },
          {
            id: 'error-pages',
            label: 'Error Pages',
            type: 'dropdown',
            icon: IconFile,
            children: [
              {
                id: 'not-found',
                label: '404 Page',
                to: { name: 'not-found' }
              },
              {
                id: 'server-error',
                label: '500 Page',
                to: { name: 'server-error' }
              },
              {
                id: 'maintenance',
                label: 'Maintenance page',
                to: { name: 'maintenance' }
              }
            ]
          }
        ]
      ]
    },
    {
      id: 'form-elements',
      label: 'Form Elements',
      to: { name: 'form-elements' },
      icon: IconCheckbox
    },
    {
      id: 'extra',
      label: 'Extra',
      type: 'dropdown',
      icon: IconStar,
      children: [
        [
          { id: 'activity', label: 'Activity', to: { name: 'activity' } },
          { id: 'gallery', label: 'Gallery', to: { name: 'gallery' } },
          { id: 'invoice', label: 'Invoice', to: { name: 'invoice' } },
          { id: 'search_results', label: 'Search results', to: { name: 'search_results' } },
          { id: 'pricing_cards', label: 'Pricing cards', to: { name: 'pricing_cards' } },
          { id: 'pricing_table', label: 'Pricing table', to: { name: 'pricing_table' } },
          { id: 'faq', label: 'FAQ', to: { name: 'faq' } },
          { id: 'users', label: 'Users', to: { name: 'users' } },
          { id: 'license', label: 'License', to: { name: 'license' } },
          { id: 'logs', label: 'Logs', to: { name: 'logs' } }
        ],
        [
          { id: 'music', label: 'Music', to: { name: 'music' } },
          { id: 'photo-grid', label: 'Photogrid', to: { name: 'photo-grid' } },
          { id: 'tasks', label: 'Tasks', to: { name: 'tasks' } },
          { id: 'uptime_monitor', label: 'Uptime monitor', to: { name: 'uptime_monitor' } },
          { id: 'widgets', label: 'Widgets', to: { name: 'widgets' } },
          { id: 'wizard', label: 'Wizard', to: { name: 'wizard' } },
          { id: 'settings', label: 'Settings', to: { name: 'settings' } },
          { id: 'trial_ended', label: 'Trial ended', to: { name: 'trial_ended' } },
          { id: 'job_listing', label: 'Job listing', to: { name: 'job_listing' } },
          { id: 'page_loader', label: 'Page loader', to: { name: 'page_loader' } }
        ]
      ]
    },
    {
      id: 'layout',
      label: 'Layout',
      type: 'dropdown',
      icon: IconLayout2,
      children: [
        [
          {
            id: 'layout_horizontal',
            label: 'Horizontal',
            to: { name: 'layout_horizontal' }
          },
          {
            id: 'layout_boxed',
            label: 'Boxed',
            to: { name: 'layout_boxed' }
          },
          {
            id: 'layout_vertical',
            label: 'Vertical',
            to: { name: 'layout_vertical' }
          },
          {
            id: 'layout_vertical_transparent',
            label: 'Vertical transparent',
            to: { name: 'layout_vertical_transparent' }
          },
          {
            id: 'layout_vertical_right',
            label: 'Right vertical',
            to: { name: 'layout_vertical_right' }
          },
          {
            id: 'layout_condensed',
            label: 'Condensed',
            to: { name: 'layout_condensed' }
          },
          {
            id: 'layout_combo',
            label: 'Combined',
            to: { name: 'layout_combo' }
          }
        ],
        [
          {
            id: 'layout_navbar_dark',
            label: 'Navbar dark',
            to: { name: 'layout_navbar_dark' }
          },
          {
            id: 'layout_navbar_sticky',
            label: 'Navbar sticky',
            to: { name: 'layout_navbar_sticky' }
          },
          {
            id: 'layout_navbar_overlap',
            label: 'Navbar overlap',
            to: { name: 'layout_navbar_overlap' }
          },
          {
            id: 'layout_rtl',
            label: 'RTL mode',
            to: { name: 'layout_rtl' }
          },
          {
            id: 'layout_fluid',
            label: 'Fluid',
            to: { name: 'layout_fluid' }
          },
          {
            id: 'layout_fluid_vertical',
            label: 'Fluid vertical',
            to: { name: 'layout_fluid_vertical' }
          }
        ]
      ]
    },
    {
      id: 'icons',
      label: 'Icons',
      to: { name: 'icons' },
      icon: IconGhost
    },
    {
      id: 'help',
      label: 'Help',
      type: 'dropdown',
      icon: IconLifebuoy,
      children: [
        [
          {
            id: 'documentation',
            label: 'Documentation',
            to: { name: 'documentation' }
          },
          {
            id: 'changelog',
            label: 'Changelog',
            to: { name: 'changelog' }
          },
          {
            id: 'support',
            label: 'Support project!',
            to: { name: 'support' },
            icon: IconHeart,
            style: {
              icon: 'text-red-500',
              label: 'text-red-500'
            }
          }
        ]
      ]
    }
  ])

  return {
    links
  }
})
