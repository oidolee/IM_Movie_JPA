import { useSearchParams } from "react-router-dom"

export function FailPage() {
  const [searchParams] = useSearchParams();
  const [selectedSeats, setSelectedSeats] = useState([]);

  const confirmation = window.alert(
    "결제가 실패했습니다. 메인화면으로 이동합니다."
  );
  if (confirmation) {
    window.location.assign("/");
  }
  return (
    <div>
    </div>
  )
}