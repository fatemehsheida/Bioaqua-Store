"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

interface Comment {
  id: string;
  user: {
    firstName: string;
    lastName: string;
  };
  text: string;
  rating: number;
  createdAt: string;
}

interface CommentsResponse {
  results: Comment[];
  total: number;
}

interface CommentFormData {
  text: string;
  rating: string;
}

export default function CommentsSection({ productId }: { productId: string }) {
  const [comments, setComments] = useState<Comment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<CommentFormData>();

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:8000/product/${productId}/comments`)
        if (!res.ok) throw new Error('Failed to fetch comments');
        const data: CommentsResponse = await res.json();
        setComments(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchComments();
  }, [productId]);

  const onSubmit = async (data: CommentFormData) => {
    try {
      const response = await fetch('http://localhost:8000/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3OWM5M2VjYmQ4Mjg0ZTQ4NWViYzMzZSIsInJvbGUiOjMsImlhdCI6MTc0MDAxMzE3MywiZXhwIjoxNzQwNjE3OTczfQ.iOThng8UWCg_E7s1-dsgYFal_KPm8bl_BqZLStBfCyA"
        },
        body: JSON.stringify({
          text: data.text,
          rating: Number(data.rating),
          product: Number(productId)
        }),
      });

      if (!response.ok) throw new Error('Failed to submit comment');

      // Refresh comments after submission
      const newRes = await fetch(`http://localhost:8000/product/${productId}/comments`);
      const newData: CommentsResponse = await newRes.json();
      setComments(newData.results);
      reset();
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  return (
    <div className="px-12 pb-9 mt-20" dir="rtl">
      <h2 className="text-2xl font-normal mb-6 text-gray-800 dark:text-white/80">نظرات کاربران</h2>

      {/* Comment Form */}
      <form onSubmit={handleSubmit(onSubmit)} className="mb-8 bg-white p-6 rounded-lg shadow-md dark:bg-[#3538427d]">
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white/80">نظر شما</label>
          <textarea
            {...register("text", { required: "لطفا نظر خود را وارد کنید" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2
             focus:ring-[#2E2A39] dark:bg-[#1f2127d8] dark:text-white/80"
            rows={4}
          />
          {errors.text && <p className="text-red-500 text-sm mt-1">{errors.text.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2 dark:text-white/80">امتیاز</label>
          <select
            {...register("rating", { required: "لطفا امتیاز را انتخاب کنید" })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2E2A39] dark:bg-[#1f2127d8]"
          >
            <option value="" >انتخاب امتیاز</option>
            {[5, 4, 3, 2, 1].map(num => (
              <option className="dark:bg-[#1f2127d8]" key={num} value={num}>{num} ستاره</option>
            ))}
          </select>
          {errors.rating && <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-[#2E2A39] text-white px-6 py-2 rounded-md hover:bg-[#3b3647] transition-colors dark:bg-[#94d2bd] dark:hover:scale-105 "
        >
          ارسال نظر
        </button>
      </form>

      {/* Comments List */}
      {loading ? (
        <p className="text-center text-gray-600">در حال بارگیری نظرات...</p>
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : (
        <div className="space-y-6">
          {comments.map(comment => (
            <div key={comment.id} className="bg-white dark:bg-[#31333bd8] p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-start mb-3">
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-white/80">
                    {comment.user.firstName} {comment.user.lastName}
                  </h4>
                </div>
                <span className="text-sm text-gray-500 dark:text-white/50">
                  {new Date(comment.createdAt).toLocaleDateString('fa-IR')}
                </span>
              </div>

              <div className="flex w-full items-center justify-between px-3">
                <p className="text-gray-600 leading-relaxed dark:text-white/60">{comment.text}</p>
                <div className="flex items-center mt-1">
                  <span className="text-yellow-500">★ {comment.rating}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}