import { LightningElement } from "lwc";

export default class HomeGallery extends LightningElement {
  selectedImageId = 1;

  images = [
    {
      id: 1,
      title: "Montañas del norte",
      description: "Paisaje natural con tonos fríos y ambiente tranquilo.",
      url: "https://picsum.photos/id/1018/900/500",
    },
    {
      id: 2,
      title: "Ciudad al atardecer",
      description: "Escena urbana moderna con luz cálida.",
      url: "https://picsum.photos/id/1015/900/500",
    },
    {
      id: 3,
      title: "Bosque profundo",
      description: "Imagen natural con profundidad y contraste.",
      url: "https://picsum.photos/id/1019/900/500",
    },
    {
      id: 4,
      title: "Costa salvaje",
      description: "Paisaje marítimo con sensación de amplitud.",
      url: "https://picsum.photos/id/1025/900/500",
    },
  ];

  get selectedImage() {
    return this.images.find((image) => image.id === this.selectedImageId);
  }

  get galleryImages() {
    return this.images.map((image) => {
      return {
        ...image,
        cardClass:
          image.id === this.selectedImageId
            ? "thumbnail-card selected"
            : "thumbnail-card",
      };
    });
  }

  handleImageClick(event) {
    this.selectedImageId = Number(event.currentTarget.dataset.id);
  }
}
