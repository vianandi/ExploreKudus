import React from "react";

const Maps = () => {
  return (
    <div className="w-full h-screen">
      <iframe
        title="Kabupaten Kudus Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243979.27273619772!2d110.70316496838545!3d-6.797281191939589!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e70c532064fbb8f%3A0x3027a76e352bb30!2sKabupaten%20Kudus%2C%20Jawa%20Tengah!5e1!3m2!1sid!2sid!4v1702001411122!5m2!1sid!2sid"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Maps;
