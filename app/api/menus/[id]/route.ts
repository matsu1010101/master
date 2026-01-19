import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// 削除機能 (DELETE)
export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  try {
    // データベースから削除
    await prisma.menu.delete({
      where: { id: id },
    });

    // 成功したらメッセージを返す（文字化け対策ヘッダー付き）
    return new NextResponse(JSON.stringify({ message: "削除成功" }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });

  } catch (error) {
    console.error("削除エラー:", error);
    return new NextResponse(JSON.stringify({ error: "削除に失敗しました" }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
    });
  }
}