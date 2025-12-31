
function InfoSection() {
  return (
   <section className="bg-[#eef0fc]">
  <div class="mx-auto my-40 max-w-7xl px-4 py-8 sm:px-6 lg:px-8 ">
    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div class="max-w-prose md:max-w-none">
          <h2 class="text-2xl font-semibold text-gray-900 sm:text-3xl">
           Find Your Perfect Car, Without the Hassle
          </h2>

          <p class="mt-4 text-pretty text-gray-700">
            Our car selling platform makes buying and selling vehicles simple, transparent, and secure. Whether you’re looking for a brand-new ride or a reliable pre-owned car, we connect you with verified sellers, detailed listings, and fair pricing—all in one place. From browsing to finalizing the deal, we ensure a smooth and trustworthy experience at every step.
          </p>
        </div>
      </div>

      <div>
        <img src="https://img.freepik.com/free-vector/transport-flat-muscle-car-illustration_23-2149450022.jpg?semt=ais_hybrid&w=740&q=80" className="rounded-full " alt="carImage" />
      </div>
    </div>
  </div>
</section>
  )
}

export default InfoSection