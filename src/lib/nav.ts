/**
 * Navigation items for the single-page portfolio
 * Each item maps to a section anchor ID
 */
export interface NavItem {
	label: string;
	href: string;
	id: string;
}

export const NAV_ITEMS: NavItem[] = [
	{ label: 'Journey', href: '#journey', id: 'journey' },
	{ label: 'Work', href: '#case-studies', id: 'work' },
	{ label: 'Experience', href: '#experience', id: 'experience' },
	{ label: 'Contact', href: '#contact', id: 'contact' },
];
