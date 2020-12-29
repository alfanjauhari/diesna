export default function Icon({ name, ...props }) {
  switch (name) {
    case 'place':
      return (
        <svg
          viewBox="0 0 24 24"
          width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
          <circle cx={12} cy={10} r={3} />
        </svg>
      );

    case 'time':
      return (
        <svg
          viewBox="0 0 24 24"
          width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <circle cx={12} cy={12} r={10} />
          <path d="M12 6v6l4 2" />
        </svg>
      );

    default:
      return (
        <svg
          viewBox="0 0 24 24"
          width={24}
          height={24}
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          {...props}
        >
          <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
        </svg>
      );
  }
}
