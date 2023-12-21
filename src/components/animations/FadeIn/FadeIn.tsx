import { motion } from 'framer-motion'

import { FadeInProps } from './FadeIn.types'

export function FadeIn({ children }: FadeInProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1 } }}
            exit={{ opacity: 0, transition: { duration: 1 } }}>
            {children}
        </motion.div>
    )
}
