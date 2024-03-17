import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Weatherbox from '@/components/Weatherbox.vue'

describe('Weatherbox', () => {
    it('renders correctly', () => {
    const weatherData = {
        date: '2022-01-01',
        date_epoch: 1640995200,
        day: {
        maxtemp_c: '20',
        maxtemp_f: '68',
        mintemp_c: '10',
        mintemp_f: '50',
        avgtemp_c: '15',
        avgtemp_f: '59', 
        condition: {
                text: 'Sunny',
                icon: 'http://example.com/weather-icon.png',
                code: 1000
            }
        }
    }

    const wrapper = mount(Weatherbox, {
        props: {
            weatherData,
            tempUnit: 'Celsius'
        }
    });

    expect(wrapper.text()).toContain('Friday 2022-01-01');
    expect(wrapper.text()).toContain('Sunny')
    expect(wrapper.text()).toContain('High: 20 °C')
    expect(wrapper.text()).toContain('Low: 10 °C')
    })
})