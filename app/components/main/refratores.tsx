import Image from 'next/image';

export async function Refratores() {
  let data = [];

  // Fetch data from the JSON Server
  await fetch('http://localhost:3001/refratores')
      .then((response) => response.json())
      .then((fetchedData) => {
        data = fetchedData; // Assign the fetched data to the 'data' variable
      })
      .catch((error) => console.error('Error:', error));
  // console.log(data)
  return (
    <div>
      <h1 className='ml-10'>Refratores</h1>
      <div className='flex justify-evenly mt-2'>
        {data.map((item) => (
          <div key={item.id} className='flex flex-wrap items-center justify-center w-[260px]'>
            <img src={item.img_url} className='rounded w-auto h-44' alt="logo do site" />
            <div className='flex justify-between w-[96%] mt-3'>
              <div>
                <h2>{item.nome_refrator}</h2>
                <h3>{item.preco}</h3>
              </div>
              <button className='rounded bg-slate-800 px-4 h-[40px] mt-1'>Compar</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
