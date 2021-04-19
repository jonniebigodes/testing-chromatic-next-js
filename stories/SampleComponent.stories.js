import React from 'react'

import SampleComponent from './SampleComponent'

export default {
    component:SampleComponent,
    title:'Sample Component'
}


const Template= (args) => <SampleComponent {...args} />

export const ExampleStory= Template.bind({})
ExampleStory.args={
    propertyA:'Boop',
    propertyB:2501,
    propertyC:'Boingo'
}