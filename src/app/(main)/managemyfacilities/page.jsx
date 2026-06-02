import { auth } from '@/lib/auth';
import { headers } from "next/headers";
import Image from 'next/image';
import Link from 'next/link';

import Facilitydlt from '@/component/Facilitydlt';

const Managemyfacilities = async () => {
  const session = await auth.api.getSession({
    headers: await headers()
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities/${session?.user?.email}`,
    { cache: "no-store" }
  );

  const facilities = await res.json();

  return (
    <div className='container mx-auto p-5'>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {facilities?.map((facility) => (
          <div key={facility._id} className="bg-white border shadow-md rounded-xl p-5">

            <Image
              src={facility.image}
              alt={facility.facilityName}
              width={200}
              height={200}
              className="rounded-lg object-cover"
            />

            <h2 className="text-xl font-semibold">
              {facility.facilityName}
            </h2>

            <p>
              Location: {facility.location}
            </p>

            <Link
              href={`/Edit-facility/${facility._id}`}
              className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm"
            >
              Edit
            </Link>

            <Facilitydlt facilityId={facility._id} />

          </div>
        ))}

      </div>
    </div>
  );
};

export default Managemyfacilities;