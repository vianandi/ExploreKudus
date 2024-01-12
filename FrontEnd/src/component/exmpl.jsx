<div className="flex fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
  <div className="bg-white p-8 w-96 rounded-md">
    <h2 className="text-2xl font-bold mb-4">Tambah Wisata</h2>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <label>Nama Wisata</label>
        <input
          {...register("name")}
          type="text"
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label>Deskripsi 1</label>
        <textarea
          {...register("description1")}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label>Deskripsi 2</label>
        <textarea
          {...register("description2")}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label>Deskripsi 3</label>
        <textarea
          {...register("description3")}
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label>Fasilitas</label>
        <input
          {...register("facilities")}
          type="text"
          className="w-full border rounded p-2"
        />
      </div>
      <div className="mb-4">
        <label>Kategori</label>
        <select
          {...register("category")}
          onChange={handleCategoryChange}
          className="w-full border rounded p-2"
        >
          <option value="Wisata Prioritas">Wisata Prioritas</option>
          <option value="Wisata Alam">Wisata Alam</option>
          <option value="Wisata Belanja">Wisata Belanja</option>
          <option value="Wisata Kuliner">Wisata Kuliner</option>
          <option value="Wisata Religi">Wisata Religi</option>
          <option value="Wisata Sejarah">Wisata Sejarah</option>
        </select>
      </div>
      {watch("category") === "Wisata Prioritas" && (
        <div className="mb-4">
          <label>Hashtag</label>
          <input
            {...register("hashtag")}
            type="text"
            className="w-full border rounded p-2"
          />
        </div>
      )}
      <div className="mb-4">
        <label>Gambar</label>
        <input {...register("image")} type="file" accept="image/*" />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Submit
      </button>
    </form>
  </div>
</div>;
