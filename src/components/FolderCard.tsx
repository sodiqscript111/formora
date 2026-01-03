interface FolderCardProps {
    brandColor: string
    brandImage: string
    brandName: string
    size?: 'default' | 'large'
}

export default function FolderCard({ brandColor, brandImage, brandName, size = 'default' }: FolderCardProps) {
    const isLarge = size === 'large'

    return (
        <div className={`relative cursor-pointer transition-all duration-300 ease-out hover:scale-110 hover:rotate-3 ${isLarge
                ? 'w-[420px] h-[320px] max-md:w-[320px] max-md:h-[240px]'
                : 'w-[320px] h-[240px] max-md:w-[260px] max-md:h-[200px]'
            }`}>
            {/* Brand image behind folder, popping out at top */}
            <div className={`absolute left-1/2 -translate-x-1/2 z-0 ${isLarge
                    ? '-top-[50px] w-[280px] max-md:w-[200px]'
                    : '-top-[30px] w-[180px] max-md:w-[140px]'
                }`}>
                <img
                    src={brandImage}
                    alt={brandName}
                    className="w-full h-auto rounded-lg object-cover"
                />
            </div>

            {/* Mac-style folder SVG */}
            <svg
                viewBox="0 0 320 240"
                className="w-full h-full relative z-10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Folder back tab */}
                <path
                    d="M20 40 L20 20 C20 12 26 6 34 6 L100 6 C108 6 114 12 114 20 L120 40"
                    fill={brandColor}
                    stroke="#2f2f2b"
                    strokeWidth="2"
                />
                {/* Folder body */}
                <rect
                    x="10"
                    y="40"
                    width="300"
                    height="190"
                    rx="12"
                    fill={brandColor}
                    stroke="#2f2f2b"
                    strokeWidth="2"
                />
                {/* Inner cutout effect */}
                <rect
                    x="24"
                    y="54"
                    width="272"
                    height="162"
                    rx="8"
                    fill={brandColor}
                    opacity="0.6"
                />
            </svg>
        </div>
    )
}
