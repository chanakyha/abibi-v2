const NewsContentPage = ({ params }: { params: { newsId: string } }) => {
  return (
    <div className="min-h-screen w-screen bg-[#131313]">{params.newsId}</div>
  );
};

export default NewsContentPage;
