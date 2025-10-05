interface Logo21UProps {
  size?: 'small' | 'medium' | 'large'
  variant?: 'standard' | 'premium'
  className?: string
}

export default function Logo21U({ size = 'medium', variant = 'standard', className = '' }: Logo21UProps) {
  const sizeClasses = {
    small: 'text-lg font-bold',
    medium: 'text-xl font-bold', 
    large: 'text-6xl font-bold'
  }
  
  return (
    <div className={`${sizeClasses[size]} ${className}`}>
      <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-orange-500 bg-clip-text text-transparent">
        1BBT=21U
      </span>
    </div>
  )
}