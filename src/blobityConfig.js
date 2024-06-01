const initializeBlobity = () => {
    const blobity = new window.Blobity({
        licenseKey: "opensource",
        focusableElementsOffsetX: 5,
        focusableElementsOffsetY: 5,
        color: "#e4ded7",
        dotColor: "#0e1016",
        invert: true,
        focusableElements: "[data-blobity], a:not([data-no-blobity]), h4:not([data-no-blobity]), li:not([data-no-blobity]), button:not([data-no-blobity]), [data-blobity-tooltip]",
        opacity: 1,
        zIndex: 100,
        size: 40,
        radius: 4,
        magnetic: true,
    });

    return blobity;
};

export default initializeBlobity;
