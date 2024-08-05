
const phoneIconSvg = `
 <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.2" baseProfile="tiny" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19.502 3.672l-1.795-1.793c-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879l-1.586 1.586c-1.17 1.17-1.17 3.072 0 4.242l1.379 1.379-4.172 4.172-1.379-1.379c-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879l-1.586 1.586c-1.17 1.17-1.17 3.072 0 4.242l1.794 1.793c.465.465 1.796 1.545 4.116 1.545 2.764 0 5.694-1.529 8.711-4.545 6.245-6.246 4.825-11.002 3.002-12.828zm-6.209 1.207l1.586-1.586c.195-.195.451-.293.707-.293s.512.098.707.293l1.083 1.082-3.001 3-1.082-1.082c-.391-.391-.391-1.023 0-1.414zm-10 11.414c-.391-.391-.391-1.023 0-1.414l1.586-1.586c.195-.195.451-.293.707-.293s.512.098.707.293l1.082 1.082-2.999 3-1.083-1.082zm11.793-1.207c-3.083 3.082-5.551 3.959-7.297 3.959-1.349 0-2.267-.523-2.702-.959-.004-.004 2.995-3.004 2.995-3.004l.297.297c.195.195.451.293.707.293s.512-.098.707-.293l5.586-5.586c.391-.391.391-1.023 0-1.414l-.297-.297 3.001-3c1.003 1.004 2.467 4.539-2.997 10.004z"></path></svg>
`;

const navItems = [
  { label: "OWN THE FRANCHISE", link: "/" },
  {
    label: "Enquiries at +91 9999999999",
    iconSVG: phoneIconSvg,
  },
  {
    label: "After Sales Service enquiries at +91 9999999999",
    iconSVG: phoneIconSvg,
  },
];


const menuItems= [
  { label: "Home", link: "/" },
  { label: "About Us", link: "/about" },
  { label: "Services", link: "/services" },
  { label: "Products", link: "/products" },
  { label: "Gallery", link: "/gallery" },
  { label: "Contact Us", link: "/contact" },
];

export { menuItems, navItems };
