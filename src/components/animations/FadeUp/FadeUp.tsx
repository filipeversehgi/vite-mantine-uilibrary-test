import { motion } from 'framer-motion'

import { FadeUpProps } from './FadeUp.types'

export function FadeUp({ children, y = 150 }: FadeUpProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            {children}
        </motion.div>
    )
}
