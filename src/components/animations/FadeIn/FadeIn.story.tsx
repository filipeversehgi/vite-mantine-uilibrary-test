import { FadeIn } from './FadeIn'

export default {
    component: FadeIn,
    tags: ['autodocs'],
    title: 'Animations/FadeIn',
    parameters: {
        docs: {
            inline: true,
            canvas: { sourceState: 'shown' }, // start with the source open
        },
    },
}

/**
 * Adds FadeIn animation to children on component load
 */
export const Default = {
    args: {
        children: 'This Text Will Fade',
    },
}
