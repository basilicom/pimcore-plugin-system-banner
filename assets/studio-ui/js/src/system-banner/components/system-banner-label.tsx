import React from 'react'
import { textColorFor } from '../utils/text-color'

export const SystemBannerLabel = ({ text, color }: { text: string, color: string }): React.JSX.Element => (
    <div style={{
        backgroundColor: color,
        margin: 8,
        borderRadius: 6,
        paddingBlock: 12,
        paddingInline: 12,
    }}>
        <div style={{
            writingMode: 'vertical-rl',
            textTransform: 'uppercase',
            fontSize: 16,
            lineHeight: 1,
            color: textColorFor(color)
        }}>
            {text}
        </div>
    </div>
)
