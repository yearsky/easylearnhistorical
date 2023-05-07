<Link
  href={{
    pathname: "/module/[slug]",
    query: {
      slug: item.title,
      src: item.file[0].downloadURL,
    },
  }}
  as={`/module/${item.title}`}
  key={index}
>
  <div>
    <div className="lg:col-span-2 xl:col-auto w-full cursor-pointer">
      <div className="flex flex-col justify-between w-full h-ful py-10 px-14 bg-gray-100 rounded-2xl dark:bg-trueGray-800">
        <Image
          src={item.image[0].downloadURL}
          width="40"
          layout="responsive"
          height="40"
          unoptimized
          alt="Avatar"
        />
        <p className="text-2xl leading-normal">{item.title}</p>
        <Avatar image={item.authorImage[0].downloadURL} name={item.author} />
      </div>
    </div>
  </div>
</Link>;
