import { useState, useEffect, type ComponentType } from 'react'
import * as icons from '@diditui/icons-react'

interface IconsProps {
  type?: 'linear' | 'bold'
}

export const Icons = ({ type = 'linear' }: IconsProps) => {
  const [regularIcons, setRegularIcons] = useState<Array<{ name: string; component: ComponentType<icons.IconProps> }>>([])
  const [boldIcons, setBoldIcons] = useState<Array<{ name: string; component: ComponentType<icons.IconProps> }>>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadIcons = () => {
      const regular: Array<{ name: string; component: ComponentType<icons.IconProps> }> = []
      const bold: Array<{ name: string; component: ComponentType<icons.IconProps> }> = []

      // Get all icon keys from the icons object
      const iconKeys = Object.keys(icons)

      for (const iconKey of iconKeys) {
        try {
          const iconComponent = icons[iconKey as keyof typeof icons] as ComponentType<icons.IconProps>

          if (iconKey.endsWith('Bold')) {
            // Bold icon
            const name = iconKey.toLowerCase()
            bold.push({
              name,
              component: iconComponent
            })
          } else if (iconKey.startsWith('Icon')) {
            // Regular icon
            const name = iconKey.replace('Icon', '').toLowerCase()
            regular.push({
              name,
              component: iconComponent
            })
          }
        } catch (error) {
          console.warn(`Failed to load icon: ${iconKey}`, error)
        }
      }

      setRegularIcons(regular)
      setBoldIcons(bold)
      setLoading(false)
    }

    loadIcons()
  }, [])

  if (loading) {
    return <div className="flex items-center justify-center p-8">Loading icons...</div>
  }

  return (
      <div className=''>
        <h2 className="text-2xl font-bold mb-2 text-gray-800">{type === 'linear' ? 'Linear' : 'Bold'} Icons ({type === 'linear' ? regularIcons.length : boldIcons.length})</h2>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {type === 'linear' ? regularIcons.map(({ name, component: IconComponent }) => (
            <div key={name} title={name}>
              <IconComponent size={24} className='mx-auto w-fit text-black' />
            </div>
          )) : boldIcons.map(({ name, component: IconComponent }) => (
            <div key={name} title={name}>
              <IconComponent size={24} className='mx-auto w-fit text-black' />
            </div>
          ))}
        </div>
      </div>
  )
}
