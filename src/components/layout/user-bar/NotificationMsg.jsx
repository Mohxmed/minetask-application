function NotificationMsg({ title, body, date, read = false }) {
  return (
    <div
      className={`w-full border-b border-gray-200 cursor-pointer h-18 flex flex-col justify-center pr-4 pl-9 transition-colors duration-150  relative last:border-b-0 ${
        !read ? "bg-slate-50 hover:bg-slate-100" : "hover:bg-slate-50"
      }`}
    >
      <h3 className="text-sm font-semibold relative flex items-center">
        {!read && (
          <span className="absolute -left-5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary block"></span>
          </span>
        )}
        {title}
      </h3>
      <p className="text-[12px]">{body}</p>
      <p className="text-[10px]">{date}</p>
    </div>
  );
}

export default NotificationMsg;
