export default function Button({
    children,
    link = "#",
    className = "",
    color = "bg-companyBlue",
    hoverColor = "hover:bg-blue-800",
    textColor = "text-white",
    focusColor = "focus:ring-blue-300",
    icon = true,
    iconPosition = "end",
    ...props
}) {
    return (
        <a
            href={link}
            className={`mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center rounded-lg ${textColor} ${color} ${hoverColor} focus:ring-4 focus:outline-none ${focusColor} ${className}`}
            {...props}
        >
            {icon && iconPosition === "start" && (
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 me-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            )}
            {children || "Button"}
            {icon && iconPosition === "end" && (
                <svg
                    className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                </svg>
            )}
        </a>
    );
}
