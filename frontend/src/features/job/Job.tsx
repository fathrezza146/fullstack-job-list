import React from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectParams } from './jobSlice';
import { Card, Typography } from '../../app/components/base';
import { IJobs } from '../../api/types/job';
import { apiGetJobs } from '../../api/api';

export async function Job() {
  const params = useAppSelector(selectParams)

    const data = await apiGetJobs(params);

  
  return (
    <div className="flex flex-col justify-between gap-2 px-16 pb-14" id="section-job-list">
      <h1 className="text-2xl font-bold">Job List</h1>
      {(
        <>
          {data.length > 0 ? data.map((job: IJobs, index: number) => (
            <div key={index}>
              <Card {...job} />
            </div>
          )) : <Typography text="Data unavailable." />}
          {/* <Spinner /> */}
        </>
      )}
    </div>
  )
}
