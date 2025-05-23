const data = [
  {
    taskName: "Task 01",
    selectedList: "personal",
    startTime: "2025-04-24T17:00:00.000Z",
    endTime: "2025-04-24T20:00:00.000Z",
    id: "7f302998-aa0a-42c2-b03d-99f7ede90da5",
    isCompleted: false,
    date: "2025-04-24T17:00:00.000Z",
    priority: 2,
  },
  {
    taskName: "Mua sắm đồ dùng",
    selectedList: "shopping",
    startTime: "2025-04-25T09:00:00.000Z",
    endTime: "2025-04-25T10:30:00.000Z",
    id: "a1b2c3d4-e5f6-7890-1234-567890abcdef",
    isCompleted: false,
    date: "2025-04-25T09:00:00.000Z",
    priority: 1,
  },
  {
    taskName: "Gọi điện cho khách hàng",
    selectedList: "work",
    startTime: "2025-04-25T14:00:00.000Z",
    endTime: "2025-04-25T15:00:00.000Z",
    id: "f9e8d7c6-b5a4-3210-fedc-ba9876543210",
    isCompleted: true,
    date: "2025-04-25T14:00:00.000Z",
    priority: 3,
  },
  {
    taskName: "Lập kế hoạch tuần tới",
    selectedList: "work",
    startTime: "2025-04-26T10:00:00.000Z",
    endTime: "2025-04-26T12:00:00.000Z",
    id: "01234567-89ab-cdef-0123-456789abcdef",
    isCompleted: false,
    date: "2025-04-26T10:00:00.000Z",
    priority: 2,
  },
  {
    taskName: "Tập thể dục buổi sáng",
    selectedList: "personal",
    startTime: "2025-04-27T06:00:00.000Z",
    endTime: "2025-04-27T07:00:00.000Z",
    id: "bcdefa01-2345-6789-abcd-ef0123456789",
    isCompleted: true,
    date: "2025-04-27T06:00:00.000Z",
    priority: 1,
  },
  {
    taskName: "Đọc email",
    selectedList: "work",
    startTime: "2025-04-27T09:30:00.000Z",
    endTime: "2025-04-27T10:00:00.000Z",
    id: "98765432-10fe-dcba-9876-543210fedcba",
    isCompleted: false,
    date: "2025-04-27T09:30:00.000Z",
    priority: 2,
  },
  {
    taskName: "Chuẩn bị bài thuyết trình",
    selectedList: "work",
    startTime: "2025-04-28T13:00:00.000Z",
    endTime: "2025-04-28T16:00:00.000Z",
    id: "fedcba98-7654-3210-fedc-ba9876543210",
    isCompleted: false,
    date: "2025-04-28T13:00:00.000Z",
    priority: 3,
  },
  {
    taskName: "Hẹn gặp bạn bè",
    selectedList: "personal",
    startTime: "2025-04-28T19:00:00.000Z",
    endTime: "2025-04-28T21:00:00.000Z",
    id: "23456789-abcd-ef01-2345-6789abcdef01",
    isCompleted: true,
    date: "2025-04-28T19:00:00.000Z",
    priority: 1,
  },
  {
    taskName: "Kiểm tra tiến độ dự án",
    selectedList: "work",
    startTime: "2025-04-29T10:30:00.000Z",
    endTime: "2025-04-29T11:30:00.000Z",
    id: "cdef0123-4567-89ab-cdef-0123456789ab",
    isCompleted: false,
    date: "2025-04-29T10:30:00.000Z",
    priority: 2,
  },
  {
    taskName: "Xem phim",
    selectedList: "entertainment",
    startTime: "2025-04-29T20:00:00.000Z",
    endTime: "2025-04-29T22:00:00.000Z",
    id: "89abcdef-0123-4567-89ab-cdef01234567",
    isCompleted: false,
    date: "2025-04-29T20:00:00.000Z",
    priority: 1,
  },
  {
    taskName: "Thuyết trình dự án",
    selectedList: "work",
    startTime: "2025-04-30T14:00:00.000Z",
    endTime: "2025-04-30T16:00:00.000Z",
    id: "1a2b3c4d-5e6f-4a3b-2c1d-9e8f7a6b5c4d",
    isCompleted: false,
    date: "2025-04-30T14:00:00.000Z",
    priority: 3,
  },
  {
    taskName: "Đi siêu thị",
    selectedList: "shopping",
    startTime: "2025-05-01T10:00:00.000Z",
    endTime: "2025-05-01T11:30:00.000Z",
    id: "9b8a7c6d-5e4f-3a2b-1c0d-8e9f6a7b4c2d",
    isCompleted: false,
    date: "2025-05-01T10:00:00.000Z",
    priority: 2,
  },
  {
    taskName: "Đọc sách",
    selectedList: "personal",
    startTime: "2025-05-01T20:00:00.000Z",
    endTime: "2025-05-01T21:00:00.000Z",
    id: "7c5b3a1d-9e8f-6a4b-2c0d-4e3f1a2b9c8d",
    isCompleted: true,
    date: "2025-05-01T20:00:00.000Z",
    priority: 1,
  },
  {
    taskName: "Viết báo cáo",
    selectedList: "work",
    startTime: "2025-05-02T09:00:00.000Z",
    endTime: "2025-05-02T12:00:00.000Z",
    id: "3d1e2f4a-6b8c-0d9e-7f5a-2b4c6d8e0f1a",
    isCompleted: false,
    date: "2025-05-02T09:00:00.000Z",
    priority: 3,
  },
  {
    taskName: "Đi dạo công viên",
    selectedList: "personal",
    startTime: "2025-05-02T16:00:00.000Z",
    endTime: "2025-05-02T17:30:00.000Z",
    id: "5e7f9a1b-3c2d-8e4f-0a6b-9c1d2e3f4a5b",
    isCompleted: false,
    date: "2025-05-02T16:00:00.000Z",
    priority: 2,
  },
  {
    taskName: "Học tiếng Anh",
    selectedList: "personal",
    startTime: "2025-05-03T19:00:00.000Z",
    endTime: "2025-05-03T20:30:00.000Z",
    id: "2f4a6b8c-0d1e-9f3a-5b7c-8e0a4d6b2c1d",
    isCompleted: false,
    date: "2025-05-03T19:00:00.000Z",
    priority: 1,
  },
  {
    taskName: "Làm việc nhà",
    selectedList: "personal",
    startTime: "2025-05-04T08:00:00.000Z",
    endTime: "2025-05-04T10:00:00.000Z",
    id: "8c0d9e7f-5a3b-2c4d-6b1e-4f2a9c8b0d3e",
    isCompleted: true,
    date: "2025-05-04T08:00:00.000Z",
    priority: 2,
  },
  {
    taskName: "Tham gia hội thảo",
    selectedList: "work",
    startTime: "2025-05-04T14:00:00.000Z",
    endTime: "2025-05-04T17:00:00.000Z",
    id: "4d6b2c1d-8e0a-9f3a-5b7c-0d9e7f2a8c6b",
    isCompleted: false,
    date: "2025-05-04T14:00:00.000Z",
    priority: 3,
  },
  {
    taskName: "Chơi game",
    selectedList: "entertainment",
    startTime: "2025-05-05T21:00:00.000Z",
    endTime: "2025-05-05T23:00:00.000Z",
    id: "6b8c0d9e-7f2a-4d3b-5c1d-9e8f0a6b4c2d",
    isCompleted: false,
    date: "2025-05-05T21:00:00.000Z",
    priority: 1,
  },
];
export default data;
