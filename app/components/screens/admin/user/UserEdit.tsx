import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

import AdminNavigation from '@/ui/admin-navigation/AdminNavigation'
import AuthFields from '@/ui/auth-fields/AuthFields'
import Button from '@/ui/form-elements/Button'
import Heading from '@/ui/heading/Heading'
import SkeletonLoader from '@/ui/skeleton-loader/SkeletonLoader'

import { Meta } from '@/utils/meta'

import { useUserEdit } from './useUserEdit'
import { IUserEditInput } from './user-edit.interface'

const UserEdit: FC = () => {
  const { handleSubmit, register, formState, setValue, control } =
    useForm<IUserEditInput>({
      mode: 'onChange',
    })

  const { isLoading, onSubmit } = useUserEdit(setValue)

  return (
    <Meta title="Edit user">
      <AdminNavigation />
      <Heading title="Edit user" />
      <form onSubmit={handleSubmit(onSubmit)} className="admin-form">
        {isLoading ? (
          <SkeletonLoader count={3} />
        ) : (
          <>
            <AuthFields
              register={register}
              formState={formState}
              isPasswordRequired={false}
            />
            <Controller
              name="isAdmin"
              control={control}
              render={({ field }) => (
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    field.onChange(!field.value)
                  }}
                  className="block text-link mb-7"
                >
                  {field.value ? 'Make it regular user' : 'Make it admin'}
                </button>
              )}
            />
          </>
        )}

        <Button>Update</Button>
      </form>
    </Meta>
  )
}

export default UserEdit
