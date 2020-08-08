FROM python:3.9-rc-alpine3.12

ADD ./python-src /src
WORKDIR /src

RUN apk add --no-cache build-base postgresql-client
RUN pip install -r requirements.txt

CMD ["uvicorn", "main:app", "--reload", "--host", "0.0.0.0", "--port", "8000"]
