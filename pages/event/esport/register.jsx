import React, { useState } from 'react';
import { Wrapper } from '../../../comps';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import axios from 'axios';
import { NextSeo } from 'next-seo';

export default function Register() {
  const { register, handleSubmit, errors, setError } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(participantData) {
    try {
      setIsLoading(true);

      const { data } = await axios.post(
        'https://diesna-server.herokuapp.com/api/v1/participants/register',
        participantData
      );

      setIsLoading(false);

      router.push({
        pathname: '/event/esport/register/sukses',
        query: {
          name: data.content.leaderName,
        },
      });
    } catch (error) {
      setIsLoading(false);

      if (error.response.status === 400) {
        if (
          error.response.hasOwnProperty('data') &&
          error.response.data.hasOwnProperty('content')
        ) {
          error.response.data.content.map((err) => {
            setError(err.param, {
              type: 'server',
              message: err.msg,
              shouldFocus: true,
            });
          });
        }
      }
    }
  }

  return (
    <Wrapper>
      <NextSeo title="Daftar Kompetisi E-Sport" />
      <div className="bg-white shadow-xl rounded p-6">
        <form action="/register" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="text-blue-900 text-2xl font-bold mb-4">
              Informasi Tim
            </h1>
            <div className="flex flex-col md:flex-row">
              <div className="block w-full">
                <label htmlFor="teamName" className="text-gray-600 text-sm">
                  Nama Tim
                </label>
                <input
                  id="teamName"
                  type="text"
                  className={
                    errors.teamName
                      ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                      : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                  }
                  ref={register({
                    required: { value: true, message: 'Nama Tim Wajib Diisi!' },
                  })}
                  placeholder="Nama Tim"
                  name="teamName"
                  autoFocus
                />
                <div className={errors.teamName ? 'mt-1' : 'hidden'}>
                  <span className="text-red-600 text-sm">
                    {errors.teamName?.message}
                  </span>
                </div>
              </div>
              <div className="block w-full mt-2 md:mt-0 md:ml-4">
                <label htmlFor="leaderName" className="text-gray-600 text-sm">
                  Nama Ketua Tim
                </label>
                <input
                  id="leaderName"
                  type="text"
                  className={
                    errors.leaderName
                      ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                      : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                  }
                  ref={register({
                    required: {
                      value: true,
                      message: 'Nama Ketua Tim Wajib Diisi!',
                    },
                  })}
                  placeholder="Nama Ketua Tim"
                  name="leaderName"
                />
                <div className={errors.leaderName ? 'mt-1' : 'hidden'}>
                  <span className="text-red-600 text-sm">
                    {errors.leaderName?.message}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4">
              <div className="block w-full">
                <label htmlFor="email" className="text-gray-600 text-sm">
                  Alamat Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={
                    errors.email
                      ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                      : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                  }
                  ref={register({
                    required: { value: true, message: 'Email Wajib Diisi!' },
                    pattern: {
                      value: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                      message: 'Email Tidak Valid!',
                    },
                  })}
                  placeholder="Alamat Email Perwakilan Tim"
                  name="email"
                />
                <div className={errors.email ? 'mt-1' : 'hidden'}>
                  <span className="text-red-600 text-sm">
                    {errors.email?.message}
                  </span>
                </div>
              </div>
              <div className="block w-full mt-2 md:mt-0 md:ml-4">
                <label htmlFor="handphone" className="text-gray-600 text-sm">
                  Nomor Handphone
                </label>
                <input
                  id="handphone"
                  type="tel"
                  className={
                    errors.handphone
                      ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                      : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                  }
                  ref={register({
                    required: {
                      value: true,
                      message: 'Nomor Handphone Wajib Diisi!',
                    },
                    pattern: {
                      value: /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/,
                      message: 'Nomor Handphone Tidak Valid!',
                    },
                  })}
                  placeholder="Nomor Handphone Perwakilan Tim"
                  name="handphone"
                />
                <div className={errors.handphone ? 'mt-1' : 'hidden'}>
                  <span className="text-red-600 text-sm">
                    {errors.handphone?.message}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-blue-900 text-2xl font-bold mb-4">
              Informasi Anggota Tim
            </h1>
            <div className="flex flex-col md:flex-row">
              <div className="block w-full">
                <label
                  htmlFor="memberOneName"
                  className="text-gray-600 text-sm"
                >
                  Nama Anggota Tim #1
                </label>
                <input
                  id="memberOneName"
                  type="text"
                  className={
                    errors.memberOneName
                      ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                      : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                  }
                  ref={register({
                    required: {
                      value: true,
                      message: 'Nama Anggota #1 Wajib Diisi!',
                    },
                  })}
                  placeholder="Nama Anggota Tim #1"
                  name="memberOneName"
                />
                <div className={errors.memberOneName ? 'mt-1' : 'hidden'}>
                  <span className="text-red-600 text-sm">
                    {errors.memberOneName?.message}
                  </span>
                </div>
              </div>
              <div className="block w-full mt-2 md:mt-0 md:ml-4">
                <label
                  htmlFor="memberTwoName"
                  className="text-gray-600 text-sm"
                >
                  Nama Anggota Tim #2
                </label>
                <input
                  id="memberTwoName"
                  type="text"
                  className={
                    errors.memberTwoName
                      ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                      : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                  }
                  ref={register({
                    required: {
                      value: true,
                      message: 'Nama Anggota #2 Wajib Diisi!',
                    },
                  })}
                  placeholder="Nama Anggota Tim #2"
                  name="memberTwoName"
                />
                <div className={errors.memberTwoName ? 'mt-1' : 'hidden'}>
                  <span className="text-red-600 text-sm">
                    {errors.memberTwoName?.message}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mt-4">
              <div className="block w-full">
                <label
                  htmlFor="memberThreeName"
                  className="text-gray-600 text-sm"
                >
                  Nama Anggota Tim #3
                </label>
                <input
                  id="memberThreeName"
                  type="text"
                  className={
                    errors.memberThreeName
                      ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                      : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                  }
                  ref={register({
                    required: {
                      value: true,
                      message: 'Nama Anggota #3 Wajib Diisi!',
                    },
                  })}
                  placeholder="Nama Anggota Tim #3"
                  name="memberThreeName"
                />
                <div className={errors.memberThreeName ? 'mt-1' : 'hidden'}>
                  <span className="text-red-600 text-sm">
                    {errors.memberThreeName?.message}
                  </span>
                </div>
              </div>
              <div className="block w-full mt-2 md:mt-0 md:ml-4">
                <label
                  htmlFor="memberFourName"
                  className="text-gray-600 text-sm"
                >
                  Nama Anggota Time #4
                </label>
                <input
                  id="memberFourName"
                  type="text"
                  className={
                    errors.memberFourName
                      ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                      : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                  }
                  ref={register({
                    required: {
                      value: true,
                      message: 'Nama Anggota #4 Wajib Diisi!',
                    },
                  })}
                  placeholder="Nama Anggota Tim #4"
                  name="memberFourName"
                />
                <div className={errors.memberFourName ? 'mt-1' : 'hidden'}>
                  <span className="text-red-600 text-sm">
                    {errors.memberFourName?.message}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <h1 className="text-blue-900 text-2xl font-bold mb-4">
              Informasi Tambahan
            </h1>
            <div className="block w-full">
              <label htmlFor="proof" className="text-gray-600 text-sm">
                Bukti Tanda Pelajar
              </label>
              <input
                id="proof"
                type="text"
                className={
                  errors.proof
                    ? 'bg-white border border-red-600 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                    : 'bg-white border border-gray-300 rounded p-4 mt-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-900'
                }
                ref={register({
                  required: {
                    value: true,
                    message:
                      'Link Bukti Tanda Pelajar Seluruh Anggota Wajib Diisi!',
                  },
                  pattern: {
                    value: /(https?:\/\/)?([\w\-])+\.{1}([a-zA-Z]{2,63})([\/\w-]*)*\/?\??([^#\n\r]*)?#?([^\n\r]*)/,
                    message: 'Link Bukti Tanda Pelajar Tidak Valid!',
                  },
                })}
                placeholder="Link Bukti Tanda Pelajar Seluruh Anggota Tim (Beserta Ketua Tim)"
                name="proof"
              />
              <div className={errors.proof ? 'mt-1' : 'hidden'}>
                <span className="text-red-600 text-sm">
                  {errors.proof?.message}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button
              className="mt-6 w-full py-4 flex justify-center items-center bg-blue-900 rounded text-white hover:bg-blue-800 duration-300 focus:outline-none focus:ring-2"
              type="submit"
            >
              {isLoading ? (
                <>
                  <svg
                    className="animate-spin text-white h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  <span className="ml-4">Loading</span>
                </>
              ) : (
                'Daftar Sekarang'
              )}
            </button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
