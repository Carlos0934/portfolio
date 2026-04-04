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
	{ label: 'Hero', href: '#hero', id: 'hero' },
	{ label: 'Value', href: '#value-strip', id: 'value-strip' },
	{ label: 'Impact', href: '#selected-impact', id: 'selected-impact' },
	{ label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
	{ label: 'Experience', href: '#experience', id: 'experience' },
	{ label: 'Technical', href: '#technical-focus', id: 'technical-focus' },
	{ label: 'Contact', href: '#contact', id: 'contact' },
];