import EventList from '@/views/EventList'
import { mount } from '@vue/test-utils'
import store from '@/store'
import router from '@/router'

describe('EventList', () => {
  it(`render's properly`, () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store, router]
      }
    })

    expect(wrapper.exists()).toBeTruthy()
  })
})

describe('page title', () => {
  it('is rendered witht correct text', () => {
    const wrapper = mount(EventList, {
      global: {
        plugins: [store, router]
      }
    })
    const title = wrapper.find('[data-testid="event-list-title"]')
    expect(title.text()).toContain('Events for Good')
  })
})
