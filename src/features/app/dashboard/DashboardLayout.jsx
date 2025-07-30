function DashboardLayout({ main, aside }) {
  return (
    <div className="grid grid-cols-9">
      <div className="col-span-6 max-xl:col-span-9 border-r border-gray-200 bg-gray-50">
        <div className="py-4 px-6  overflow-hidden">{main()}</div>
      </div>
      <div className="col-span-3 p-4 box-border bg-slate-100 max-xl:col-span-9 max-xl:px-6 ">
        {aside()}
      </div>
    </div>
  );
}

export default DashboardLayout;
