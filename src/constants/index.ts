//links in navigation bar
export const navLinks = [
    { href: "home", label: "Home"},
    { href: "#find-talent", label: "Find Talent"},
    { href: "#find-work", label: "Find Work"},
    { href: "contact-us", label: "Contact Us"},
    { href: "about-us", label: "About Us"},
];

//statistics values to be displayed
export const statistics = [
    { value: '10k+', label: 'Clients Satisfied'},
    { value: '10k+', label: 'Freelancers Worked'},
    { value: '1k+', label: 'Companines Happy'},
];

//images fot services in home page
import copywriting from '@/assets/icons/Services/copywriting.svg'
import coding from '@/assets/icons/Services/coding.svg'
import accountant from '@/assets/icons/Services/accountant.svg'
import graphicdesign from '@/assets/icons/Services/graphicdesign.svg'
import socialmedia from '@/assets/icons/Services/socialmedia.svg'
import photographer from '@/assets/icons/Services/photographer.svg'

export const images = [
    { src: copywriting, alt: 'Copy Writer', link: '/#'},
    { src: coding, alt: 'Coding', link: '/#' },
    { src: accountant, alt: 'Accountant', link: '/#' },
    { src: graphicdesign, alt: 'Graphic Designers', link: '/#' },
    { src: socialmedia, alt: 'Social Media Manager', link: '/#' },
    { src: photographer, alt: 'Photographer', link: '/#' },
    
];

//reviews card 
import profile from '@/assets/profile.svg'
export const reviews = [
    { src: profile, description: `
     Real-time project tracking ensures accountability, while a community-driven feedback system promotes professionalism. It's a reliable hub for seamless collaboration, empowering freelancers and satisfying clients.`, name: 'User 1', rating: 5},
    { src: profile, description: `
    Real-time project tracking ensures accountability, while a community-driven feedback system promotes professionalism. It's a reliable hub for seamless collaboration, empowering freelancers and satisfying clients.`, name: 'User 2', rating: 5},
    { src: profile, description: `
    Real-time project tracking ensures accountability, while a community-driven feedback system promotes professionalism. It's a reliable hub for seamless collaboration, empowering freelancers and satisfying clients.`, name: 'User 3', rating: 4},
    /*
    { src: profile, description: `
    Real-time project tracking ensures accountability, while a community-driven feedback system promotes professionalism. It's a reliable hub for seamless collaboration, empowering freelancers and satisfying clients.`, name: 'User 4'},
    { src: profile, description: `
    Real-time project tracking ensures accountability, while a community-driven feedback system promotes professionalism. It's a reliable hub for seamless collaboration, empowering freelancers and satisfying clients.`, name: 'User 5'},
    { src: profile, description: `
    Real-time project tracking ensures accountability, while a community-driven feedback system promotes professionalism. It's a reliable hub for seamless collaboration, empowering freelancers and satisfying clients.`, name: 'User 6'},
    { src: profile, description: `
    Real-time project tracking ensures accountability, while a community-driven feedback system promotes professionalism. It's a reliable hub for seamless collaboration, empowering freelancers and satisfying clients.`, name: 'User 7'}, 
    */
]